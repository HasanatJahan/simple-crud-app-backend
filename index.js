const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// import the model 
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

// Load environment variables form .env file 
dotenv.config();
const mongoLink = process.env.MONGO_URI;

// Middleware to parse json bodies 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Route to the products page 
app.use("/api/products", productRoute);

// for the home page
app.get("/", (req, res) => {
    res.send("Hello from Node API");
});

// Connect to mongodb database 
mongoose.connect(mongoLink)
    .then(() => {
        // First we want database connected 
        console.log('Connected to the database!');
        // then we want server running on port 3000
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        })
    })
    .catch(() => {
        console.log("Connection failed!");
    });

