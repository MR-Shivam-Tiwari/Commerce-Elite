const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// Get all products with minimal details
router.route('/').get(async (req, res) => {
  try {
    const products = await Product.find({}, { name: 1, Price: 1, Image: 1, Features: 1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific product with all details
router.route('/:id').get(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});





// // Update the quantity of a product in the shopping cart
// router.route('/cart/update/:id').put(async (req, res) => {
//   try {
//     const productId = req.params.id;
//     const { quantity } = req.body;

//     // Validate if productId is provided and is valid
//     if (!productId) {
//       return res.status(400).json({ message: 'Product ID is required.' });
//     }

//     const product = await Product.findById(productId);

//     // Validate if the product exists
//     if (!product) {
//       return res.status(404).json({ message: 'Product not found.' });
//     }

//     // Update the quantity in the shopping cart (you may update the session or database accordingly)
//     // For simplicity, we will just return the updated cartItem
//     const updatedCartItem = {
//       productId: product._id,
//       name: product.name,
//       price: product.Price,
//       quantity: quantity || 1,
//     };

//     res.json({ message: 'Shopping cart updated.', updatedCartItem });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Remove a product from the shopping cart
// router.route('/cart/remove/:id').delete(async (req, res) => {
//   try {
//     const productId = req.params.id;

//     // Validate if productId is provided and is valid
//     if (!productId) {
//       return res.status(400).json({ message: 'Product ID is required.' });
//     }

//     // You may remove the product from the shopping cart (update session or database accordingly)
//     res.json({ message: 'Product removed from the shopping cart.', productId });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;
