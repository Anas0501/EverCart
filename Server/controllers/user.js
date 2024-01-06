const {check} = require('express-validator');
const User = require('../models/User');
const validateRequestBody =  require('../middleware/validateRequestBody');

exports.createNewUser = async (req, res) => {
	check('name', 'Name is required').not().isEmpty().run(req);
	check('email', 'Email is required').isEmail().run(req);
	check('phone', 'Phone is required').not().isEmpty().run(req);
	validateRequestBody,
	async (req,res) => {
		const {name, email, phone} = req.body;

		try {
			const user = await User.create({
				uid: req.firebaseUser.uid,
				name,
				email,
				phone,
				isAdmin: false,
			})

			res.status(201).json({"UserCreated": user});
			console.log(user);
		} catch (err) {
			console.error(err);
			res.status(400).json({msg: err.message});
		}
	}
};


