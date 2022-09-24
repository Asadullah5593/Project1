const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: false,
    },
    brandName: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    madeIn: {
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
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;