const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5001;
require('dotenv').config();

app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  const { latitude, longitude } = req.query;
  const apiKey = process.env.GOOGLE_API_KEY;

  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', {
      params: {
        location: `${latitude},${longitude}`,
        radius: 40233, // radius within 25 miles (in meters)
        type: 'restaurant',
        keyword: 'vegan',
        key: apiKey
      }
    });
    res.json(response.data.results);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});