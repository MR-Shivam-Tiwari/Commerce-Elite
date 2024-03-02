const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

// Routes
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
// Start the server
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
