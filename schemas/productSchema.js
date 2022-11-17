const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    brand_name: {type: String},
    color: {type: String},
    made_in: {type: String},
    price: {type: Number,},
    model: {type: String},
    image_url: {type: String},
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;