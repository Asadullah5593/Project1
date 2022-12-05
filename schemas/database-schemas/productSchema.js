const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    product_name: {type: String, required: true},
    brand_name: {type: String, required: true},
    color: {type: String, required: true},
    product_code: {type: String, unique: true, required: true},
    made_in: {type: String, required: true},
    specifications: {type: String, required: true},
    price: {type: Number, required: true},
    model: {type: String, required: true},
    image_url: {type: String, required: true},
    available_quantity: {type: Number, required: true},
    is_published: {type: Boolean, required: true}
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;