const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const userController = require('../controllers/user');

router.post('/', userController.createNewUser);

module.exports = router;