const Order = require("../models/Order");
const Product = require("../models/Product");
const mongoose = require('mongoose');

// Get all orders for admin
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'name email')
      .populate('items.product', 'name')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.product', 'name')
      .sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get single order
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email')
      .populate('items.product', 'name');
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod,
      totalAmount,
      paymentStatus
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ 
        success: false,
        message: "No order items" 
      });
    }

    if (!req.user || !req.user.id) {
      return res.status(401).json({ 
        success: false,
        message: "User not authenticated" 
      });
    }

    // Calculate prices
    const itemsPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shippingPrice = 5.00;
    const taxPrice = itemsPrice * 0.08;
    const totalPrice = totalAmount || (itemsPrice + shippingPrice + taxPrice);

    // Transform items to match Order model and update stock
    const orderItems = [];
    for (const item of items) {
      const productId = item.product || item._id || item.id;
      
      // Update product stock
      const product = await Product.findById(productId);
      if (product) {
        if (product.stock >= item.quantity) {
          product.stock -= item.quantity;
          await product.save();
        } else {
          return res.status(400).json({
            success: false,
            message: `Insufficient stock for ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}`
          });
        }
      }
      
      orderItems.push({
        product: productId,
        name: item.name,
        image: item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop',
        price: item.price,
        quantity: item.quantity
      });
    }

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      shippingAddress: shippingAddress || {
        address: "Default Address",
        city: "Default City", 
        postalCode: "00000",
        country: "USA"
      },
      paymentMethod: paymentMethod || 'card',
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      coupon: req.body.coupon,
      status: 'pending',
      statusHistory: [{
        status: 'pending',
        timestamp: new Date(),
        note: 'Order placed successfully'
      }]
    });

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      data: order
    });

  } catch (error) {
    console.error("ORDER ERROR:", error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Update order status (Admin only)
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, note } = req.body;
    const order = await Order.findById(req.params.id);
    
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }
    
    order.status = status;
    order.statusHistory.push({
      status,
      timestamp: new Date(),
      note: note || `Status updated to ${status}`
    });
    
    await order.save();
    
    res.status(200).json({
      success: true,
      message: 'Order status updated successfully',
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};