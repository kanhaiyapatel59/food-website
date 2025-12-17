const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

const checkProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const products = await Product.find();
        console.log(`Found ${products.length} products:`);
        
        products.forEach(product => {
            console.log(`- ${product.name} (${product._id}) - $${product.price}`);
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

checkProducts();