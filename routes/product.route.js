const express = require("express");
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getProduct, deleteProduct, updateProduct, addProduct} = require("../controllers/product.controller.js");
const app = express();

// API to view all the listings - same as routing to '/api/products'
// Controller functions
app.get("/", getProducts);
// API to get individual products 
app.get('/:id', getProduct);

// Update a product - the request could also have been patch
app.put('/:id', updateProduct);

// Delete API 
app.delete('/:id', deleteProduct);

// Create Product 
app.post('/', addProduct);

module.exports = router; 