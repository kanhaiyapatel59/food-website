const express = require("express");
const router = express.Router();
const { createOrder, getAllOrders, getUserOrders, getOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);
router.get("/all", protect, getAllOrders);
router.get("/:id", protect, getOrder);

module.exports = router;
