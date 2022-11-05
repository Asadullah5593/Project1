const Product = require("../models/productSchema");
const {ObjectId} = require("mongodb");

async function createProduct(req, res) {
    try {
        const productData = req.body;

        let newProduct = new Product({
            brand_name: productData.brand_name,
            color: productData.color,
            made_in: productData.made_in,
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
        return res.status(200).json({success: true, products: products});
    } catch (error) {
        console.log(error)
        throw new Error("Unable to fetch all products", error);
    }
}

async function getProductDetail(req, res) {
    const id = req.params.id;
    try {
        let productDetail = await Product.findOne({_id: id.toString()});

        if (productDetail) {
            return res
                .status(200)
                .json({success: true, product: productDetail});
        } else {
            return res
                .status(404)
                .json({success: false, product: null});
        }

    } catch (error) {
        throw new Error("Unable to fetch product details!", error);
    }
}

module.exports = {createProduct, getAllProducts, getProductDetail};