const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    },
    brand_name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    made_in: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    model: {
        type: String,
        reuqired: true,
    },
    image_url: {
        type: String,
        reuqired: true,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;