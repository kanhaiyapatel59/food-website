const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

const addMoreFoods = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const newFoods = [
            {
                name: 'Chicken Tikka Masala',
                description: 'Tender chicken in creamy tomato curry sauce',
                price: 18.99,
                image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Chicken', 'Tomato sauce', 'Cream', 'Spices', 'Basmati rice'],
                nutritionalInfo: {
                    calories: 650,
                    protein: '45g',
                    carbs: '35g',
                    fat: '28g'
                },
                isFeatured: true
            },
            {
                name: 'Beef Tacos',
                description: 'Three soft tacos with seasoned ground beef',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1565299585323-38174c4a6471?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Ground beef', 'Soft tortillas', 'Lettuce', 'Cheese', 'Salsa'],
                nutritionalInfo: {
                    calories: 520,
                    protein: '32g',
                    carbs: '42g',
                    fat: '22g'
                }
            },
            {
                name: 'Grilled Salmon',
                description: 'Fresh Atlantic salmon with lemon herb seasoning',
                price: 24.99,
                image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Atlantic salmon', 'Lemon', 'Herbs', 'Vegetables', 'Rice'],
                nutritionalInfo: {
                    calories: 420,
                    protein: '38g',
                    carbs: '15g',
                    fat: '24g'
                },
                isFeatured: true
            },
            {
                name: 'Chicken Wings',
                description: 'Crispy buffalo wings with ranch dipping sauce',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Chicken wings', 'Buffalo sauce', 'Ranch dressing', 'Celery'],
                nutritionalInfo: {
                    calories: 580,
                    protein: '42g',
                    carbs: '8g',
                    fat: '38g'
                }
            },
            {
                name: 'Vegetable Stir Fry',
                description: 'Fresh mixed vegetables in savory soy sauce',
                price: 13.99,
                image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Mixed vegetables', 'Soy sauce', 'Ginger', 'Garlic', 'Rice'],
                nutritionalInfo: {
                    calories: 320,
                    protein: '12g',
                    carbs: '58g',
                    fat: '8g'
                }
            },
            {
                name: 'Chocolate Brownie',
                description: 'Rich chocolate brownie with vanilla ice cream',
                price: 8.99,
                image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Dark chocolate', 'Butter', 'Sugar', 'Eggs', 'Vanilla ice cream'],
                nutritionalInfo: {
                    calories: 480,
                    protein: '6g',
                    carbs: '65g',
                    fat: '24g'
                }
            },
            {
                name: 'Greek Salad',
                description: 'Fresh vegetables with feta cheese and olives',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Mixed greens', 'Feta cheese', 'Olives', 'Tomatoes', 'Cucumber'],
                nutritionalInfo: {
                    calories: 280,
                    protein: '14g',
                    carbs: '18g',
                    fat: '18g'
                }
            },
            {
                name: 'Mushroom Risotto',
                description: 'Creamy arborio rice with wild mushrooms',
                price: 19.99,
                image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Arborio rice', 'Wild mushrooms', 'Parmesan', 'White wine', 'Herbs'],
                nutritionalInfo: {
                    calories: 450,
                    protein: '16g',
                    carbs: '68g',
                    fat: '14g'
                }
            },
            {
                name: 'Chicken Quesadilla',
                description: 'Grilled chicken and cheese in crispy tortilla',
                price: 13.99,
                image: 'https://images.unsplash.com/photo-1618040996337-56904b7850b9?w=800&auto=format&fit=crop',
                category: 'other',
                ingredients: ['Grilled chicken', 'Cheese', 'Flour tortilla', 'Peppers', 'Sour cream'],
                nutritionalInfo: {
                    calories: 520,
                    protein: '35g',
                    carbs: '38g',
                    fat: '26g'
                }
            },
            {
                name: 'Beef Burger Deluxe',
                description: 'Premium beef patty with bacon and cheese',
                price: 16.99,
                image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=800&auto=format&fit=crop',
                category: 'burgers',
                ingredients: ['Beef patty', 'Bacon', 'Cheese', 'Lettuce', 'Tomato', 'Fries'],
                nutritionalInfo: {
                    calories: 820,
                    protein: '45g',
                    carbs: '52g',
                    fat: '48g'
                },
                isFeatured: true
            }
        ];

        await Product.insertMany(newFoods);
        console.log(`✅ Added ${newFoods.length} new food items to the menu!`);

        const totalProducts = await Product.countDocuments();
        console.log(`📊 Total products in database: ${totalProducts}`);

        process.exit(0);
    } catch (error) {
        console.error('❌ Error adding foods:', error);
        process.exit(1);
    }
};

addMoreFoods();