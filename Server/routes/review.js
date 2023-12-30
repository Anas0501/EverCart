const express = require('express');
const router = express.Router();
const reviewController = require('../controller/review');

router.get("/",reviewController.getAllProductReview);
router.post("/",reviewController.createProductReview);
router.put('/:id',reviewController.updateProductReview);
router.delete("/:id",reviewController.deleteProductReview);

module.exports = router;


