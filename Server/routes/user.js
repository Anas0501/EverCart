const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUser');
const userController = require('../controller/user');
const checkFirebaseAuth = require('../middleware/checkFirebaseAuth')


router.post("/", authenticateUser, userController.createNewUser);
router.get("/user", userController.getAllUsers)
router.get("/user/:id", userController.getUserById);
router.get("/user/me", userController.getLoggedInUser);
router.put("/", userController.editProfile);
router.delete("/", userController.deleteUser);



module.exports = router;