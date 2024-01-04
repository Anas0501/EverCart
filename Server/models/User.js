const mongoose = require('mongoose');

const phoneRegex = /^(\+91|0)?[6789]\d{9}$/;

const userSchema = new mongoose.Schema(
	{
		uid: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
			min: 3,
			max: 30,
		},
		email: {
			type: String,
			required: true,
			min: 3,
			max: 30,
			unique: true,
		},
		phone: {
			type: String,
			unique: true,
			match: phoneRegex,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model("User", userSchema);

module.exports = User;