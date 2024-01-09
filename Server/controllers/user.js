const { check } = require('express-validator');
const User = require('../models/User');
const validateRequestBody = require('../middleware/validateRequestBody');
const {
	getAuth,
  createUser,
} = require('firebase-admin/auth');

exports.createNewUser = [
	check('name', 'Please provide a name').not().isEmpty(),
	check('email', 'Please provide a valid email').isEmail(),
	check('password', 'Please provide a password with 6 or more characters').isLength({
		min: 6,
	}),
	validateRequestBody,
	async (req, res) => {
		const { name, email, password } = req.body;

		try {
			const auth = getAuth();
			const firebaseUserCredential = await createUser(
				auth,
				email,
				password,
			);

			const uid = firebaseUserCredential.user.uid;

			const idToken = await firebaseUserCredential.user.getIdToken();

			const user = await User.create({
				uid: req.firebase.uid,
				name,
				email,
				isAdmin: false,
			});

			res.status(201).send({ user, idToken, uid })
		} catch (err) {
			console.error(err.message);
			res.status(500).send(err)
		}
	},
];



