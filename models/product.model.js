const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    // this is the object 
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true // gives us created at and updated at fields
    }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
