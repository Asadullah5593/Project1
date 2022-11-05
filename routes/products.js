var express = require("express");
var router = express.Router();
var ProductController = require("../controllers/products");
var handler = require("../middlewares/authHandler");

router.post("/create", ProductController.createProduct);
router.get("/get-all", ProductController.getAllProducts);
router.get("/detail/:id", ProductController.getProductDetail);

module.exports = router;