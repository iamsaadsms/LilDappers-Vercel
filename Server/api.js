const express = require('express');
const mongoose = require('mongoose');
const Item = require('./Models/Items');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/LilDappers';


// Connect to MongoDB
mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get('/api/items', async (req, res) => {
  try {
    console.log('Fetching all items...');
    const items = await Item.find({});
    res.send(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Server Error');
  }
});

app.get('/api/items/:id', async (req, res) => {
  try {
    console.log(`Fetching item with ID ${req.params.id}...`);
    const item = await Item.find({id:req.params.id})
    if (!item) {
      return res.status(404).send('Item not found');
    }
    res.json(item);
  } catch (error) {
    console.error('Error fetching item by ID:', error);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
