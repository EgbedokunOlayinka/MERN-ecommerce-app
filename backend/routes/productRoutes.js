const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const Product = require("../models/productModel");

//  @desc Fetch all products
//  @route GET /api/products
//  @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

//  @desc Fetch single product
//  @route GET /api/product/:id
//  @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  })
);

module.exports = router;
