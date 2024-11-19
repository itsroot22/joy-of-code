const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // Allows cross-origin requests

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
const internRoutes = require('./routes/internRoutes');
app.use('/api/interns', internRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

