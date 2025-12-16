const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

const addPastaDesserts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const newItems = [
            // PASTA ITEMS
            {
                name: 'Spaghetti Carbonara',
                description: 'Classic Italian pasta with eggs, cheese, and pancetta',
                price: 17.99,
                image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=800&auto=format&fit=crop',
                category: 'pasta',
                ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta', 'Black pepper'],
                nutritionalInfo: {
                    calories: 580,
                    protein: '28g',
                    carbs: '65g',
                    fat: '24g'
                },
                isFeatured: true
            },
            {
                name: 'Penne Arrabbiata',
                description: 'Spicy tomato sauce with garlic and red peppers',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?w=800&auto=format&fit=crop',
                category: 'pasta',
                ingredients: ['Penne pasta', 'Tomatoes', 'Garlic', 'Red peppers', 'Olive oil'],
                nutritionalInfo: {
                    calories: 420,
                    protein: '14g',
                    carbs: '78g',
                    fat: '8g'
                }
            },
            {
                name: 'Fettuccine Alfredo',
                description: 'Creamy white sauce with parmesan cheese',
                price: 16.99,
                image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=800&auto=format&fit=crop',
                category: 'pasta',
                ingredients: ['Fettuccine', 'Heavy cream', 'Parmesan', 'Butter', 'Garlic'],
                nutritionalInfo: {
                    calories: 650,
                    protein: '22g',
                    carbs: '58g',
                    fat: '38g'
                }
            },
            {
                name: 'Lasagna Bolognese',
                description: 'Layered pasta with meat sauce and three cheeses',
                price: 19.99,
                image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=800&auto=format&fit=crop',
                category: 'pasta',
                ingredients: ['Lasagna sheets', 'Ground beef', 'Ricotta', 'Mozzarella', 'Parmesan'],
                nutritionalInfo: {
                    calories: 720,
                    protein: '42g',
                    carbs: '48g',
                    fat: '38g'
                },
                isFeatured: true
            },
            {
                name: 'Seafood Linguine',
                description: 'Fresh seafood in white wine garlic sauce',
                price: 22.99,
                image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop',
                category: 'pasta',
                ingredients: ['Linguine', 'Shrimp', 'Mussels', 'White wine', 'Garlic'],
                nutritionalInfo: {
                    calories: 520,
                    protein: '35g',
                    carbs: '62g',
                    fat: '12g'
                }
            },

            // DESSERT ITEMS
            {
                name: 'Tiramisu',
                description: 'Classic Italian dessert with coffee and mascarpone',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Ladyfingers', 'Mascarpone', 'Coffee', 'Cocoa powder', 'Eggs'],
                nutritionalInfo: {
                    calories: 450,
                    protein: '8g',
                    carbs: '42g',
                    fat: '28g'
                },
                isFeatured: true
            },
            {
                name: 'New York Cheesecake',
                description: 'Rich and creamy cheesecake with berry compote',
                price: 8.99,
                image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Cream cheese', 'Graham crackers', 'Eggs', 'Sugar', 'Berries'],
                nutritionalInfo: {
                    calories: 520,
                    protein: '9g',
                    carbs: '48g',
                    fat: '32g'
                }
            },
            {
                name: 'Crème Brûlée',
                description: 'Vanilla custard with caramelized sugar top',
                price: 10.99,
                image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Heavy cream', 'Vanilla', 'Egg yolks', 'Sugar', 'Caramel'],
                nutritionalInfo: {
                    calories: 380,
                    protein: '6g',
                    carbs: '28g',
                    fat: '28g'
                }
            },
            {
                name: 'Chocolate Mousse',
                description: 'Light and airy chocolate dessert with whipped cream',
                price: 7.99,
                image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Dark chocolate', 'Eggs', 'Heavy cream', 'Sugar', 'Vanilla'],
                nutritionalInfo: {
                    calories: 320,
                    protein: '6g',
                    carbs: '28g',
                    fat: '22g'
                }
            },
            {
                name: 'Apple Pie',
                description: 'Traditional apple pie with cinnamon and vanilla ice cream',
                price: 8.99,
                image: 'https://images.unsplash.com/photo-1535920527002-b35e96722da9?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Apples', 'Pie crust', 'Cinnamon', 'Sugar', 'Vanilla ice cream'],
                nutritionalInfo: {
                    calories: 420,
                    protein: '4g',
                    carbs: '68g',
                    fat: '16g'
                }
            },

            // APPETIZERS
            {
                name: 'Mozzarella Sticks',
                description: 'Crispy breaded mozzarella with marinara sauce',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=800&auto=format&fit=crop',
                category: 'appetizers',
                ingredients: ['Mozzarella cheese', 'Breadcrumbs', 'Marinara sauce', 'Herbs'],
                nutritionalInfo: {
                    calories: 380,
                    protein: '18g',
                    carbs: '28g',
                    fat: '22g'
                }
            },
            {
                name: 'Calamari Rings',
                description: 'Golden fried squid rings with spicy aioli',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&auto=format&fit=crop',
                category: 'appetizers',
                ingredients: ['Squid', 'Flour', 'Spices', 'Aioli sauce', 'Lemon'],
                nutritionalInfo: {
                    calories: 320,
                    protein: '24g',
                    carbs: '22g',
                    fat: '16g'
                }
            },

            // BEVERAGES
            {
                name: 'Fresh Orange Juice',
                description: 'Freshly squeezed orange juice',
                price: 4.99,
                image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&auto=format&fit=crop',
                category: 'beverages',
                ingredients: ['Fresh oranges'],
                nutritionalInfo: {
                    calories: 110,
                    protein: '2g',
                    carbs: '26g',
                    fat: '0g'
                }
            },
            {
                name: 'Iced Coffee',
                description: 'Cold brew coffee with ice and cream',
                price: 3.99,
                image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&auto=format&fit=crop',
                category: 'beverages',
                ingredients: ['Coffee beans', 'Ice', 'Cream', 'Sugar'],
                nutritionalInfo: {
                    calories: 80,
                    protein: '1g',
                    carbs: '12g',
                    fat: '3g'
                }
            }
        ];

        await Product.insertMany(newItems);
        console.log(`✅ Added ${newItems.length} new items to the menu!`);

        const totalProducts = await Product.countDocuments();
        console.log(`📊 Total products in database: ${totalProducts}`);

        // Show breakdown by category
        const categories = await Product.aggregate([
            { $group: { _id: '$category', count: { $sum: 1 } } },
            { $sort: { _id: 1 } }
        ]);
        
        console.log('\n📋 Items by category:');
        categories.forEach(cat => {
            console.log(`  ${cat._id}: ${cat.count} items`);
        });

        process.exit(0);
    } catch (error) {
        console.error('❌ Error adding items:', error);
        process.exit(1);
    }
};

addPastaDesserts();