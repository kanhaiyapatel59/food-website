const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

const restoreBasicProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Add basic user-like products
        const basicProducts = [
            {
                name: 'Classic Burger',
                description: 'Beef patty with lettuce, tomato, and cheese',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
                category: 'burgers',
                ingredients: ['Beef patty', 'Lettuce', 'Tomato', 'Cheese', 'Bun'],
                nutritionalInfo: { calories: 520, protein: '28g', carbs: '35g', fat: '28g' }
            },
            {
                name: 'Margherita Pizza',
                description: 'Fresh mozzarella, tomato sauce, and basil',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
                category: 'pizza',
                ingredients: ['Mozzarella', 'Tomato sauce', 'Basil', 'Pizza dough'],
                nutritionalInfo: { calories: 280, protein: '12g', carbs: '36g', fat: '10g' }
            },
            {
                name: 'Caesar Salad',
                description: 'Romaine lettuce with Caesar dressing and croutons',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan'],
                nutritionalInfo: { calories: 180, protein: '8g', carbs: '12g', fat: '12g' }
            },
            {
                name: 'Chocolate Cake',
                description: 'Rich chocolate cake with frosting',
                price: 6.99,
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Chocolate', 'Flour', 'Sugar', 'Eggs', 'Butter'],
                nutritionalInfo: { calories: 420, protein: '6g', carbs: '58g', fat: '18g' }
            },
            {
                name: 'Chicken Wings',
                description: 'Spicy buffalo wings with ranch dip',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop',
                category: 'appetizers',
                ingredients: ['Chicken wings', 'Buffalo sauce', 'Ranch dip'],
                nutritionalInfo: { calories: 380, protein: '24g', carbs: '8g', fat: '28g' }
            },
            {
                name: 'Coca Cola',
                description: 'Classic soft drink',
                price: 2.99,
                image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop',
                category: 'beverages',
                ingredients: ['Carbonated water', 'Sugar', 'Caramel color'],
                nutritionalInfo: { calories: 140, protein: '0g', carbs: '39g', fat: '0g' }
            }
        ];

        await Product.insertMany(basicProducts);
        console.log(`✅ Added ${basicProducts.length} basic products`);
        
        const count = await Product.countDocuments();
        console.log(`Total products in database: ${count}`);
        
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

restoreBasicProducts();