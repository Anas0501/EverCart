const { body, param } = require('express-validator');
const Product = require('../models/Product');
const multer = require('multer');
const validateRequestBody = require('../middleware/validateRequestBody');

exports.createProduct = [
	body('name', 'Product name is required').trim().isLength({ min: 3, max: 255 }),
	body('image', 'Product image is required').isURL(),
	body('brand', 'Product brand is required').trim().isLength({ min: 2, max: 50 }),
	body('category', 'Product category is required').trim().isLength({ min: 2, max: 50 }),
	body('description', 'Product description is required').trim().isLength({ min: 10, max: 1000 }),
	body('price', 'Product price is required and must be a number').isNumeric(),
	body('countInStock', 'Product count in stock is required and must be a number').isNumeric(),
	validateRequestBody,
	async (req, res) => {
		const { user } = req;
		const { name, image, brand, category, description, price, countInStock } = req.body;

		try {
			const newProduct = new Product({
				user: user._id,
				name,
				brand,
				category,
				description,
				price,
				countInStock,
				image: req.file.buffer,
			});

			const saveproduct = await newProduct.save();
			res.status(201).json({ product: saveproduct })
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: 'Server Error' })
		}
	},
];

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json({ products });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Server Error' })
	}
};

exports.getProductById = [
	param('productId', 'Product ID is not valid').isMongoId(),
	validateRequestBody,
	async (req, res) => {
		const { productId } = req.params;

		try {
			const product = await Product.findById(productId);

			if (!product) {
				return res.status(404).json({ error: 'Product not found' });
			}
			res.status(200).json({ product })
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: 'Server Error' })
		}
	},
];

exports.getmyProducts = async (req, res) => {
	const { user } = req;

	try {
		const userProducts = await Product.find({ user: user._id });

		res.status(200).json({ products: userProducts });
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: 'Server Error' })
	}
};

exports.updateProduct = [
	param('productId', 'Product ID is not valid').isMongoId(),
	body('name', 'Product name is required').trim().isLength({ min: 3, max: 255 }),
	body('brand', 'Product brand is required').trim().isLength({ min: 2, max: 50 }),
	body('category', 'Product category is required').trim().isLength({ min: 2, max: 50 }),
	body('description', 'Product description is required').trim().isLength({ min: 10, max: 1000 }),
	body('price', 'Product price is required and must be a number').isNumeric(),
	body('countInStock', 'Product count in stock is required and must be a number').isNumeric(),
	validateRequestBody,
	async (req, res) => {
		const { productId } = res.params;
		const { user } = req;
		const { name, brand, category, description, price, countInStock } = req.body;

		try {
			const product = await Product.findById(productId);

			if (!product) {
				return res.status(404).json({ error: 'Product not found' });
			}

			if (product.user.toString() !== user._id.toString()) {
				return res.status(403).json({ error: 'You do not have the permission to update this product as you are not the owner of this product' });
			}

			product.name = name;
			product.brand = brand;
			product.category = category;
			product.description = description;
			product.price = price;
			product.countInStock = countInStock;

			const updatedProduct = await product.save();

			res.status(200).json({ product: updatedProduct })
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: 'Server Error' })
		}
	},
];

exports.deleteProduct = [
	param('productId', 'Product ID is not valid').isMongoId(),
	validateRequestBody,
	async (req, res) => {
		const { productId } = req.params;
		const { user } = req;

		try {
			const product = await Product.findById(productId);

			if (!product) {
				return res.status(404).json({ error: 'Product not found' });
			}

			if (product.user.toString() !== user._id.toString()) {
				return res.status(403).json({ error: 'You do not have the permission to delete this product as you are not the owner of this product' });
			}

			await product.remove();

			res.status(200).json({ message: 'Product deleted successfully' });
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: 'Server Error' })
		}
	},
];





