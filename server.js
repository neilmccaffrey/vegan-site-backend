import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import recipes from './recipes.js';
import { sendRecipeSubmission } from './emailController.js';

const app = express();
const port = 5001;

dotenv.config();  // Load environment variables
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

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
