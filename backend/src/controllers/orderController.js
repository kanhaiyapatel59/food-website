const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    // 🛑 TEMPORARILY DISABLED DB INTERACTION TO FIX VALIDATION ERRORS
    // Since you only want to show a success message on the frontend for now,
    // we are commenting out the Mongoose Order.create() call.

    /*
    const order = await Order.create({
      user: req.user._id,
      items,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    */

    // ---------------------------------------------------------------------
    // 🔔 SIMULATION: Return a success status without hitting the database
    // ---------------------------------------------------------------------

    console.log("SIMULATION: Order received and validated.");
    console.log("Items received:", items.length);

    res.status(201).json({
      success: true,
      message: "Order placed successfully (DB saving is temporarily disabled).",
      // Returning an empty object or a dummy structure instead of the real 'order' object
      order: {
        _id: "SIMULATED_ID_" + Date.now(),
        totalPrice: totalPrice,
        // Add other necessary fields if the frontend expects them
      },
    });

    // ---------------------------------------------------------------------

  } catch (error) {

    console.error("ORDER ERROR:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};