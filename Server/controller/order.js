const { body, param } = require('express-validator');
const Order = require('../models/Order');
const validateRequestBody = require('../middleware/validateRequestBody');

exports.createNewOrder = [
	body('orderItems', 'Order items are required').isArray({ min: 1 }),
	body('shippingAddress', 'Shipping address is required').isObject(),
	body('paymentMethod', 'Payment method is required').trim().notEmpty(),
	validateRequestBody,
	async (req, res) => {
		const { user } = req;
		const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;

		try {
			const newOrder = new Order({
				user: user._id,
				orderItems,
				shippingAddress,
				paymentMethod,
				itemsPrice,
				taxPrice,
				shippingPrice,
				totalPrice,
			});

			const savedOrder = await newOrder.save();
			res.status(201).json({ order: savedOrder });
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Server Error' });
		}
	},
];

exports.getMyOrders = async (req, res) => {
	const { user } = req;

	try {
		const orders = await Order.find({ user: user._id }).populate('user', 'name');
		res.status(200).json({ orders });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server Error' });
	}
};

exports.getAllOrders = async (req, res) => {
	try {
		const orders = await Order.find().populate('user', 'name');
		res.status(200).json({ orders });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server Error' });
	}
};

exports.getOrderById = [
	param('id', 'Order ID is not valid').isMongoId(),
	validateRequestBody,
	async (req, res) => {
		const { id } = req.params;

		try {
			const order = await Order.findById(id).populate('user', 'name');

			if (!order) {
				return res.status(404).json({ error: 'Order not found' });
			}

			res.status(200).json({ order });
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Server Error' });
		}
	},
];

exports.updateOrderToPaid = [
	param('id', 'Order ID is not valid').isMongoId(),
	body('paymentResult.id', 'Payment ID is required').trim().notEmpty(),
	body('paymentResult.status', 'Payment status is required').trim().notEmpty(),
	body('paymentResult.update_time', 'Payment update time is required').trim().notEmpty(),
	body('paymentResult.email_address', 'Payment email address is required').isEmail(),
	validateRequestBody,
	async (req, res) => {
		const { id } = req.params;
		const { paymentResult } = req.body;

		try {
			const order = await Order.findById(id);

			if (!order) {
				return res.status(404).json({ error: 'Order not found' });
			}

			order.isPaid = true;
			order.paidAt = new Date();
			order.paymentResult = paymentResult;

			const updatedOrder = await order.save();

			res.status(200).json({ order: updatedOrder });
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Server Error' });
		}
	},
];

exports.updateOrderToDelivered = [
	param('id', 'Order ID is not valid').isMongoId(),
	body('deliveredAt', 'Delivery date is required').trim().notEmpty(),
	validateRequestBody,
	async (req, res) => {
		const { id } = req.params;
		const { deliveredAt } = req.body;

		try {
			const order = await Order.findById(id);

			if (!order) {
				return res.status(404).json({ error: 'Order not found' });
			}

			order.isDelivered = true;
			order.deliveredAt = deliveredAt;

			const updatedOrder = await order.save();

			res.status(200).json({ order: updatedOrder });
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Server Error' });
		}
	},
];