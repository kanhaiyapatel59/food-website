const mongoose = require('mongoose');
const User = require('./src/models/User');
require('dotenv').config();

const makeAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        
        const user = await User.findOneAndUpdate(
            { email: 'admin@test.com' },
            { role: 'admin' },
            { new: true }
        );
        
        console.log('User updated to admin:', user);
        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

makeAdmin();