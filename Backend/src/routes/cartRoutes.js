const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");
const CartItem = require("../models/cartModel"); // Update this line to import the CartItem model

router.route("/add").post(async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    const { productId, quantity } = req.body;

    // Validate if productId is provided and is valid
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    const product = await Product.findById(productId);

    // Validate if the product exists
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Add the product to the shopping cart
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.Price,
      image: product.Image,
      quantity: quantity || 1,
    };

    // Create a new CartItem using the CartItem model
    const newCartItem = new CartItem(cartItem);

    // Save the newCartItem to the database
    await newCartItem.save();

    res.json({
      message: "Product added to the shopping cart.",
      cartItem: newCartItem,
    });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ message: err.message });
  }
});

router.route("/items").get(async (req, res) => {
  try {
    // Retrieve all cart items from the database
    const cartItems = await CartItem.find();

    // Map each cart item to include details about the associated product
    const cartItemsWithProductDetails = await Promise.all(
      cartItems.map(async (cartItem) => {
        const product = await Product.findById(cartItem.productId);
        return {
          cartItem,
          productDetails: {
            name: product.name,
            price: product.Price,
            image: product.Image,
            // Include other product details as needed
          },
        };
      })
    );

    res.json(cartItemsWithProductDetails);
  } catch (err) {
    console.error("Error fetching cart items:", err);
    res.status(500).json({ message: err.message });
  }
});

router.route("/remove/:productId").delete(async (req, res) => {
  try {
    const { productId } = req.params;

    // Validate if productId is provided and is valid
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required." });
    }

    // Remove the cart item by productId
    const removedCartItem = await CartItem.findOneAndDelete({
      productId: productId,
    });

    // Check if the removedCartItem is defined before using it
    if (removedCartItem) {
      res.json({
        message: "Product removed from the shopping cart.",
        removedCartItem,
      });
    } else {
      res
        .status(404)
        .json({ message: "Product not found in the shopping cart." });
    }
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
