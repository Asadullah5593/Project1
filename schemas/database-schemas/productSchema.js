const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {type: String},
    brand_name: {type: String},
    color: {type: String},
    product_code: {type: String, unique: true},
    made_in: {type: String},
    specifications: {type: String},
    price: {type: Number},
    model: {type: String},
    image_url: {type: String},
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;