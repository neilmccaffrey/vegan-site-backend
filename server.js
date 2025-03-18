import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import recipes from './recipes.js';
import { sendRecipeSubmission } from './emailController.js';
import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';

const app = express();
const port = 5001;

dotenv.config();  // Load environment variables
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

//mongodb
const uri = process.env.MONGODB_URI;

let db;

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((client) => {
    console.log("Connected to MongoDB");
    db = client.db('vegan-forums');  // use db to interact with collections
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

  // Route for getting all forum topic names and their post counts
app.get('/vegan-forums', async (req, res) => {
  try {
    const collections = await db.listCollections().toArray(); 
    const collectionNames = await Promise.all(
      collections.map(async (collection) => {
        const postCount = await db.collection(collection.name).countDocuments();
        return {
          name: collection.name,
          postCount: postCount,
        };
      })
    );
    res.json(collectionNames);  // Return collection names with post counts
  } catch (error) {
    console.error('Error fetching vegan forums:', error);
    res.status(500).json({ error: 'Error accessing database' });
  }
});

// route for getting all posts based on topic
app.get("/api/forums/:topic", async (req, res) => {
  const { topic } = req.params;

  try {
    const posts = await db.collection(topic).find().toArray();
    res.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// route for adding a post 
app.post('/api/forums/:topic', async (req, res) => {
  const { topic } = req.params;
  const { username, sub, post } = req.body;

  if(!username || !sub || !post.trim()){
    return res.status(400).json({ message: 'Post text is required.' });
  }
  
  try {
    const newPost = {
      username,
      sub,
      post,
      likedBy: [],
      comments: [],
      createdAt: new Date(),  // Add timestamp
    };

    const topicPostsCollection = db.collection(topic); // Access the topic collection dynamically
    const result = await topicPostsCollection.insertOne(newPost);

    if (result.insertedId) {
      res.status(201).json({ _id: result.insertedId, ...newPost }); // Return full post
    }

  } catch (error) {
    console.error('Error adding post: ', error);
    res.status(500).send('Failed to add post');
  }
});

// Route for adding like to post
app.put('/api/forums/:topic/:postId/like', async (req, res) => {
  const { topic, postId } = req.params;
  const { sub } = req.body;

  if (!sub) {
    return res.status(400).json({ message: 'Must be logged in to like' });
  }

  try {
    const topicPostsCollection = db.collection(topic);

    // fetch the post by ID
    const post = await topicPostsCollection.findOne({ _id: new ObjectId(postId) });

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    // Ensure likedBy field exists and is initialized
    if (!post.likedBy) {
      post.likedBy = []; 
    }

    // Check if the user has already liked the post
    const hasLiked = post.likedBy.includes(sub);

    // Toggle the like by either adding or removing the user
    const update = hasLiked
      ? { $pull: { likedBy: sub } } // Remove the user sub from likedBy
      : { $addToSet: { likedBy: sub } }; // Add the user sub to likedBy

    // Update the post in the database
    const updatedPostResult = await topicPostsCollection.findOneAndUpdate(
      { _id: new ObjectId(postId) },
      update,
      { returnDocument: 'after' }
    );

    // Return the updated post 
    res.json(updatedPostResult.value);

  } catch (error) {
    console.error('Error updating like:', error);
    res.status(500).json({ message: 'Failed to update like.' });
  }
});

// Route for adding comment to post
app.post('/api/forums/:topic/:postId/comment', async (req, res) => {
  const { topic, postId } = req.params;
  const { username, sub, comment } = req.body;

  if (!username || !sub || !comment.trim()) {
    return res.status(400).json({ message: 'Comment text is required.' });
  }

  try {
    const newComment = {
      _id: new ObjectId(), // unique ID for the comment
      username,
      sub,
      comment,
      createdAt: new Date(),
    };

    const topicPostsCollection = db.collection(topic);

    const result = await topicPostsCollection.updateOne(
      { _id: new ObjectId(postId) }, // Find the post by ID
      { $push: { comments: newComment } } // Add comment to the array
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Post not found.' });
    }

    res.status(201).json(newComment); // Send back the new comment
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).send('Failed to add comment.');
  }
});

// Route for editing a post
app.put('/api/forums/:topic/:postId/edit', async (req, res) => {
  const { topic, postId } = req.params;
  const { sub, editedContent } = req.body;

  if (!sub || !editedContent.trim()) {
    return res.status(400).json({ message: 'Post content is required.' });
  }

  try {
    const topicPostsCollection = db.collection(topic);

    const result = await topicPostsCollection.updateOne(
      { _id: new ObjectId(postId), sub }, // Ensure only the author can edit
      { $set: { post: editedContent, updatedAt: new Date() } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Post not found or unauthorized.' });
    }

    res.status(200).json({ message: 'Post updated successfully.', editedContent });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).send('Failed to update post.');
  }
});

// Route for deleting a post
app.delete('/api/forums/:topic/:postId/delete', async (req, res) => {
  const { topic, postId } = req.params;
  const { sub } = req.body;

  try {
    const topicPostsCollection = db.collection(topic);

    const result = await topicPostsCollection.deleteOne(
      { _id: new ObjectId(postId), sub }, // Ensure only the author can delete
    );

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Post not found or unauthorized.' });
    }

    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).send('Failed to delete post.');
  }
});

// Route for deleting a comment
app.delete('/api/forums/:topic/:postId/comments/:commentId/delete', async (req, res) => {
  const { topic, postId, commentId } = req.params;
  const { sub } = req.body; 

  try {
    const topicPostsCollection = db.collection(topic);

    // Find the post by ID and ensure the comment belongs to the post and the user is the author
    const result = await topicPostsCollection.updateOne(
      { _id: new ObjectId(postId), 'comments._id': new ObjectId(commentId), sub },
      { $pull: { comments: { _id: new ObjectId(commentId) } } } // Remove the comment
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: 'Comment deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Comment not found or you are not authorized to delete it.' });
    }
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).send('Failed to delete comment.');
  }
});

// Route for handling recipe submissions
app.post('/submit-recipe', sendRecipeSubmission);

app.get("/api/restaurants", async (req, res) => {
  try {
    const { latitude, longitude, nextPageToken } = req.query;

    // Define params for the request
    let params = {
      location: `${latitude},${longitude}`,
      radius: 40233, // within 25 miles
      type: "restaurant",
      keyword: "vegan",
      key: process.env.GOOGLE_API_KEY
    };

    // Add the next_page_token to params if it's provided
    if (nextPageToken) {
      params.pagetoken = nextPageToken;
    }

    // Fetch nearby restaurants
    const nearbyResponse = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
      params: params
    });

    const places = nearbyResponse.data.results;
    const newNextPageToken = nearbyResponse.data.next_page_token;

    // Fetch detailed info for each restaurant
    const detailsPromises = places.map(async (place) => {
      const detailsResponse = await axios.get("https://maps.googleapis.com/maps/api/place/details/json", {
        params: {
          place_id: place.place_id,
          fields: "address_components,website,formatted_phone_number",
          key: process.env.GOOGLE_API_KEY
        }
      });
      return { ...place, ...detailsResponse.data.result };
    });

    // Wait for all detailed information to be fetched
    const restaurants = await Promise.all(detailsPromises);

    // Send the response with the list of restaurants and the nextPageToken for pagination
    res.json({
      restaurants,
      nextPageToken: newNextPageToken || null
    });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// recipes route
app.get("/api/recipes", (req, res) => {
  res.json(recipes);  // Send the recipes data as the response
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
