const mongoose = require('mongoose');
const Cart = require('./src/models/Cart');
require('dotenv').config();

const testCart = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
        const cart = await Cart.findOne();
        if (cart) {
            console.log('Cart found:', {
                id: cart._id,
                items: cart.items.length,
                totalItems: cart.totalItems,
                totalPrice: cart.totalPrice
            });
            await cart.save();
            console.log('After save:', {
                totalItems: cart.totalItems,
                totalPrice: cart.totalPrice
            });
        } else {
            console.log('No cart found');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

testCart();