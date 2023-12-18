const { getAuth } = require("firebase-admin/auth");
const User = require("../models/User");

async function auth(req, res, next) {
	const token = req.headers.authorization;
	if (!token) {return res.status(401).json({ msg: "Send Token" });}

	try {
		const decoded = await getAuth().verifyIdToken(`${token}`);
		const uid = decoded.uid;
		const user = await getAuth().getUser(uid);

		const dbUser = await User.findOne({ uid: uid });
		if (!dbUser)
			return res.status(400).json({ msg: "User does not have a profile." });

		req.user = dbUser;
		req.firebaseUser = user;
		req.uid = uid;

		next();
	} catch (err) {
		return res.status(400).json({ msg: err.message });
	}
}

module.exports = auth;
