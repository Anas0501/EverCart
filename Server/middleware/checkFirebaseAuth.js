const { getAuth } = require("firebase-admin/auth");

async function checkFirebaseAuth(req, res, next) {
	const token = req.headers.authorization;
	if (!token) return res.status(401).json({ msg: "Send Token" });

	try {
		const decoded = await getAuth().verifyIdToken(`${token}`);
		const uid = decoded.uid;
		const user = await getAuth().getUser(uid);

		req.firebaseUser = user;
		req.uid = uid;

		next();
	} catch (error) {
		return res.status(400).json({ msg: error.message });
	}
}

module.exports = checkFirebaseAuth;



