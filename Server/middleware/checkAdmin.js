const User = require('../models/User');

exports.admin = (req,res,next) => {
	if(req.user && req.user.isAdmin) {
		next();
	}else {
		res.status(401);
		throw new Error('Not Authorized');
	}
};