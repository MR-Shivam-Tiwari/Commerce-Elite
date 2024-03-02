const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Price: { type: Number, required: true },
  Features: { type: String, required: true },
  Image: { type: String, required: true }, // Assume image URL is required
  // Add more fields as needed
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
