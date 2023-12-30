const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');
const authenticateUser = require('../middleware/authenticateUser');

router.post("/", authenticateUser, orderController.createNewOrder);
router.get("/me", authenticateUser, orderController.getMyOrders);
router.get("/", authenticateUser, orderController.getAllOrders);
router.get("/:id", authenticateUser, orderController.getOrderById);
router.put("/:id/paid", authenticateUser, orderController.updateOrderToPaid);
router.put("/:id/delivered", authenticateUser, orderController.updateOrderToDelivered);

module.exports = router;
