const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

// Import models
const User = require('./src/models/User');
const Product = require('./src/models/Product');

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing data
        await User.deleteMany({});
        await Product.deleteMany({});
        console.log('🗑️  Cleared existing data');

        // Create admin user
        const adminUser = await User.create({
            name: 'Admin',
            email: 'admin@foodyham.com',
            password: 'admin123',
            role: 'admin',
            phone: '+1-123-456-7890',
            address: '123 Admin Street, Food City'
        });

        // Create regular users
        const regularUsers = await User.create([
            {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123'
            },
            {
                name: 'Jane Smith',
                email: 'jane@example.com',
                password: 'password123'
            }
        ]);

        console.log('👥 Created users');

        // Create sample products
        const products = await Product.create([
            {
                name: 'Classic Cheeseburger',
                description: 'Juicy beef patty with melted cheddar cheese, fresh lettuce, tomatoes, and special sauce in a toasted bun.',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
                category: 'burgers',
                ingredients: ['Beef patty', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Special sauce'],
                nutritionalInfo: {
                    calories: 750,
                    protein: '38g',
                    carbs: '48g',
                    fat: '35g'
                },
                isFeatured: true
            },
            {
                name: 'Margherita Pizza',
                description: 'Classic pizza with fresh mozzarella, basil, and San Marzano tomato sauce on hand-tossed crust.',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
                category: 'pizza',
                ingredients: ['Pizza dough', 'Mozzarella cheese', 'Tomato sauce', 'Fresh basil', 'Olive oil'],
                nutritionalInfo: {
                    calories: 820,
                    protein: '36g',
                    carbs: '92g',
                    fat: '32g'
                },
                isFeatured: true
            },
            {
                name: 'Caesar Salad',
                description: 'Fresh romaine lettuce with Caesar dressing, garlic croutons, and shaved parmesan cheese.',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese', 'Lemon juice'],
                nutritionalInfo: {
                    calories: 320,
                    protein: '12g',
                    carbs: '18g',
                    fat: '22g'
                }
            },
            {
                name: 'BBQ Chicken Pizza',
                description: 'Grilled chicken, red onions, cilantro on BBQ sauce base with mozzarella.',
                price: 16.99,
                image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=800&auto=format&fit=crop',
                category: 'pizza',
                ingredients: ['Pizza dough', 'BBQ sauce', 'Grilled chicken', 'Red onions', 'Cilantro', 'Mozzarella'],
                nutritionalInfo: {
                    calories: 880,
                    protein: '42g',
                    carbs: '95g',
                    fat: '38g'
                }
            },
            {
                name: 'Fish Tacos',
                description: 'Fresh grilled fish in soft tortillas with cabbage slaw and lime crema.',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1551504738-48b6d941b63b?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Grilled fish', 'Corn tortillas', 'Cabbage', 'Lime crema', 'Cilantro'],
                nutritionalInfo: {
                    calories: 480,
                    protein: '28g',
                    carbs: '45g',
                    fat: '18g'
                }
            },
            {
                name: 'Chocolate Lava Cake',
                description: 'Warm chocolate cake with a molten chocolate center, served with ice cream.',
                price: 8.99,
                image: 'https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Vanilla ice cream'],
                nutritionalInfo: {
                    calories: 520,
                    protein: '8g',
                    carbs: '68g',
                    fat: '32g'
                }
            }
        ]);

        console.log('🍔 Created products');
        console.log('✅ Database seeded successfully!');

        // Display summary
        console.log('\n📊 Database Summary:');
        console.log(`👥 Users: ${await User.countDocuments()}`);
        console.log(`🍔 Products: ${await Product.countDocuments()}`);
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();