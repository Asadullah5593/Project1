const Product = require("../models/productSchema");

async function createProduct(req, res) {
    try {
        const productData = req.body;

        let newProduct = new Product({
            brandName: productData.brandName,
            color: productData.color,
            madeIn: productData.madeIn,
            price: productData.price,
            model: productData.model,
            productId: productData.productId,
        });
        newProduct = await newProduct.save();
        return res
            .status(200)
            .json({message: "Product Created Successfully", product: newProduct});
    } catch (error) {
        throw new Error("Unable to create new product!", error);
    }
}

async function getAllProducts(req, res) {
    try {
        const products = await Product.find();
        return res.status(200).json({products: products});
    } catch (error) {
        console.log(error)
        throw new Error("Unable to fetch all products", error);
    }
}

module.exports = {createProduct, getAllProducts};