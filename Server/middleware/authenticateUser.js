const admin = require('firebase-admin');
const checkFirebaseAuth = require('./checkFirebaseAuth');

// Middleware to verify Firebase ID token
const authenticateUser = async (req, res, next) => {
	checkFirebaseAuth(req, res, async () => {
		try {
			const idToken = req.header('Authorization').replace('Bearer ', '');
			const decodedToken = await admin.auth().verifyIdToken(idToken);
			req.uid = decodedToken.uid;
			next();
		} catch (error) {
			res.status(401).json({ error: 'Authentication failed' });
		}
	})
};

module.exports = authenticateUser;


