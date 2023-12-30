const { body } = require('express-validator');
const Event = require('../models/User');
const validateRequestBody = require('../middleware/validateRequestBody');


exports.createNewUser = [
	body("name", "Name is required").trim().isLength({ min: 3, max: 30 }),
	body('email', 'Valid email is required').isEmail(),
	body('uid', 'UID is required').notEmpty(),
	body('phone', 'Valid phone number is required').matches(/^(\+91|0)?[6789]\d{9}$/),
	validateRequestBody,
	async (res, req) => {
		const { uid } = req;
		const { name, email, phone } = req.body;
		try {
			const existingUser = await User.findOne({ $or: [{ email }, { phone }] });

			if (existingUser) {
				return res.status(400).json({ error: 'User with this email or phone already exists' });
			}
			const newUser = new User({
				uid, // We are saving uid here just because we can use it to find our user
				name,
				email,
				phone,
				isAdmin: false,
			});

			const savedUser = await newUser.save();
			res.status(201).json({ user: savedUser });
		} catch (err) {
			console.log(err);
			res.status(500).json({ error: 'Server Error' });
		}
	},
];


exports.getAllUsers = async (req, res) => {
	try {
		const requestingUser = await User.findOne({ uid: req.uid });
		if (!requestingUser || !requestingUser.isAdmin) {
			return res.status(403).json({ error: 'Unauthorized: Only admins can access all users' });
		}

		const allUsers = await User.find();
		res.json({ users: allUsers });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

exports.getUserById = async (req, res) => {
	try {
		const { userId } = req.params;

		const requestingUser = await User.findOne({ uid: req.uid });
		if (!requestingUser || !requestingUser.isAdmin) {
			return res.status(403).json({ error: 'unautharized: Only admins can access user details by ID' });
		}
		const user = await User.findById(userId);

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.json(user);
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

exports.getLoggedInUser = async (req, res) => {
	try {
		const loggedInUser = await User.findOne({ uid: req.uid });
		if (!loggedInUser) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.json({ user: loggedInUser });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};

exports.editProfile = [
	body("name", "Name is required").trim().isLength({ min: 3, max: 30 }),
	body('email', 'Valid email is required').isEmail(),
	body('phone', 'Valid phone number is required').matches(/^(\+91|0)?[6789]\d{9}$/),
	body('isAdmin', 'isAdmin must be a boolean').isBoolean(),
	async (req, res) => {
		try {
			const { userId } = req.params;

			const requestingUser = await User.findOne({ uid: req.uid });
			if (!requestingUser || !requestingUser.isAdmin) {
				return res.status(403).json({ error: 'Unauthorized: Only admins can update user details' });
			}
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({ errors: errors.array() });
			}

			const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
			if (!updatedUser) {
				return res.status(404).json({ error: 'User not found' });
			}
			res.json({ user: updatedUser });
		} catch (err) {
			console.error(err);
			res.status(500).json({ error: 'Server error' });
		}
	},
];

exports.deleteUser = async (req, res) => {
	try {
		const { userId } = req.params;

		const requestingUser = await User.findOne({ uid: req.uid });
		if (!requestingUser || !requestingUser.isAdmin) {
			return res.status(403).json({ error: 'Unauthorized: Only admins can delete users' });
		}
		const deletedUser = await User.findByIdAndDelete(userId);

		if (!deletedUser) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.json({ message: 'User deleted successfully' });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: 'Server error' });
	}
};
