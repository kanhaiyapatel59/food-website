const mongoose = require('mongoose');
const Cart = require('./src/models/Cart');
const Product = require('./src/models/Product');
const User = require('./src/models/User');
require('dotenv').config();

const testAddToCart = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Get first user and product
        const user = await User.findOne();
        const product = await Product.findOne();
        
        if (!user || !product) {
            console.log('Need user and product to test');
            process.exit(1);
        }

        console.log(`Testing with user: ${user.email}`);
        console.log(`Testing with product: ${product.name} - $${product.price}`);

        // Find or create cart
        let cart = await Cart.findOne({ user: user._id });
        if (!cart) {
            cart = await Cart.create({ user: user._id, items: [] });
            console.log('Created new cart');
        }

        console.log('Cart before adding item:', {
            items: cart.items.length,
            totalItems: cart.totalItems,
            totalPrice: cart.totalPrice
        });

        // Add item to cart
        cart.items.push({
            product: product._id,
            name: product.name,
            image: product.image || 'default.jpg',
            price: product.price,
            quantity: 2
        });

        await cart.save();

        console.log('Cart after adding item:', {
            items: cart.items.length,
            totalItems: cart.totalItems,
            totalPrice: cart.totalPrice
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

testAddToCart();