const mongoose = require('mongoose');
const User = require('./src/models/User');
require('dotenv').config();

const createTestUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Create test user
        const user = await User.create({
            name: 'Test User',
            email: 'test@test.com',
            password: '123456'
        });

        console.log('User created:', user);
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

createTestUser();