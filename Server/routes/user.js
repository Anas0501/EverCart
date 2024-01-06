const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const userController = require('../controllers/user');
const checkFirebaseAuth = require('../middleware/checkFirebaseAuth');

router.post('/',checkFirebaseAuth, userController.createNewUser);

module.exports = router;