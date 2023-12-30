const express = require('express');
const router = express.Router();
const productController = require('../controller/product');
const authenticateUser = require('../middleware/authenticateUser');


router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.get("/me", productController.getmyProducts);
router.put("/:id", authenticateUser, productController.updateProduct)
router.delete("/:id", productController.deleteProduct);


module.exports = router;




