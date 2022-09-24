var express = require("express");
var router = express.Router();
var ProductController = require("../controllers/products");
var handler = require("../middlewares/authHandler");

router.post("/create", ProductController.createProduct);
router.get("/get-all", handler.authHandler, ProductController.getAllProducts);

module.exports = router;