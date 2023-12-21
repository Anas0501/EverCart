const { body, param } = require('express-validator');
const Review = require('../models/Review');
const validateRequestBody = require('../middleware/validateRequestBody');

exports.getAllProductReview = [
	param('productId', 'Product ID is not valid').isMongoId(),
	validateRequestBody,
	async (req,res) => {
		const {productId} = req.params;

		try {
			const productReviews = await Review.find({product: productId})
					.populate('user','name')
					.exec();
			
			res.status(200).json({reviews: productReviews})
		} catch (err) {
			console.log(err);
			res.status(500).json({error:'Server Error'});
		}
	},
];

exports.createProductReview = [
		param('productId', 'Product ID is not valid').isMongoId(),
		body('name', 'Name is required').trim().isLength({ min: 3, max: 30 }),
		body('rating', 'Rating is required and must be a number').isNumeric(),
		body('comment', 'Comment is required').trim().isLength({ min: 5, max: 1000 }),
		validateRequestBody,
		async (req,res) => {
			const {productId} = req.params;
			const {user} = req;
			const {name,rating,comment} = req.body;

			try {
				const product = await Product.findById(productId);
				if(!product) {
					return res.status(404).json({error: 'Prodcut not found'});
				}

				const newReview = new Review({
					name,
					rating,
					comment,
					user: user._id,
					product: productId,
				});

				const savedReview = await newReview.save();
				product.reviews.push(savedReview._id);
				product.numReviews = product.reviews.length;
				product.rating = (product.reviews.reduce((sum,review) => sum + review.rating, 0)/ product.numReviews).toFixed(2);

				await product.save();

				res.status(201).json({review: savedReview});
			} catch (err) {
				console.log(err);
				res.status(500).json({error:'Server Error'});
			}
		},
];

exports.updateProductReview = [
		param('reviewId', 'Review ID is not valid').isMongoId(),
		body('name', 'Name is required').trim().isLength({ min: 3, max: 30 }),
		body('rating', 'Rating is required and must be a number').isNumeric(),
		body('comment', 'Comment is required').trim().isLength({ min: 5, max: 1000 }),
		validateRequestBody,
		async (req,res) => {
			const {reviewId} = req.params;
			const {user} = req;
			const {name,rating,comment} = req.body;
			try {
				const review = await Review.findById(reviewId);

				if(!review) {
					return res.status(404).json({error: 'Review not found'});
				}

				if (review.user.toString() !== user._id.toString()) {
					return res.status(403).json({ error: 'You do not have permission to update this review' });
				}

				review.name = name;
				review.rating = rating;
				review.comment = comment;

				const updatedReview = await review.save();

				res.status(200).json({review: updatedReview});
			} catch (err) {
				console.log(err);
				res.status(500).json({error:'Server Error'});
			}
		},
];

exports.deleteProductReview = [
	param('reviewId', 'Review ID is not valid').isMongoId(),
	validateRequestBody,
	async (req,res) => {
		const {reviewId} = req.params;
		const {user} = req;

		try {
			const review = await Review.findById(reviewId);

			if(!review){
				return res.status(404).json({error: 'Review not found'});
			}

			if (review.user.toString() !== user._id.toString()) {
				return res.status(403).json({ error: 'You do not have permission to delete this review' });
			}

			await review.remove();

			res.status(200).json({message: 'Review deleted successfully'});
		} catch (err) {
			console.log(err);
			res.status(500).json({error:'Server Error'});
		}
	},
];