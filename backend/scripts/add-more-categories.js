const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

const addMoreCategories = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const newItems = [
            // MORE DESSERTS
            {
                name: 'Ice Cream Sundae',
                description: 'Vanilla ice cream with chocolate sauce and whipped cream',
                price: 6.99,
                image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Vanilla ice cream', 'Chocolate sauce', 'Whipped cream', 'Cherry'],
                nutritionalInfo: { calories: 320, protein: '5g', carbs: '42g', fat: '16g' }
            },
            {
                name: 'Strawberry Shortcake',
                description: 'Fresh strawberries with sponge cake and cream',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Sponge cake', 'Fresh strawberries', 'Whipped cream', 'Sugar'],
                nutritionalInfo: { calories: 380, protein: '6g', carbs: '58g', fat: '14g' }
            },
            {
                name: 'Banana Split',
                description: 'Three scoops of ice cream with banana and toppings',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&auto=format&fit=crop',
                category: 'desserts',
                ingredients: ['Banana', 'Vanilla ice cream', 'Chocolate ice cream', 'Strawberry ice cream', 'Nuts'],
                nutritionalInfo: { calories: 520, protein: '8g', carbs: '68g', fat: '24g' }
            },

            
            {
                name: 'Chicken Caesar Salad',
                description: 'Grilled chicken breast over classic Caesar salad',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Grilled chicken', 'Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan'],
                nutritionalInfo: { calories: 420, protein: '35g', carbs: '18g', fat: '24g' },
                isFeatured: true
            },
            {
                name: 'Cobb Salad',
                description: 'Mixed greens with bacon, blue cheese, and hard-boiled eggs',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1512852939750-1305098529bf?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Mixed greens', 'Bacon', 'Blue cheese', 'Hard-boiled eggs', 'Tomatoes'],
                nutritionalInfo: { calories: 480, protein: '28g', carbs: '12g', fat: '36g' }
            },
            {
                name: 'Asian Sesame Salad',
                description: 'Mixed greens with sesame dressing and crispy noodles',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop',
                category: 'salads',
                ingredients: ['Mixed greens', 'Sesame dressing', 'Crispy noodles', 'Carrots', 'Cucumber'],
                nutritionalInfo: { calories: 280, protein: '8g', carbs: '32g', fat: '14g' }
            },

            // CHICKEN CATEGORY
            {
                name: 'Grilled Chicken Breast',
                description: 'Herb-seasoned grilled chicken with vegetables',
                price: 18.99,
                image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&auto=format&fit=crop',
                category: 'chicken',
                ingredients: ['Chicken breast', 'Herbs', 'Vegetables', 'Rice'],
                nutritionalInfo: { calories: 420, protein: '45g', carbs: '28g', fat: '12g' },
                isFeatured: true
            },
            {
                name: 'Chicken Parmesan',
                description: 'Breaded chicken with marinara sauce and mozzarella',
                price: 19.99,
                image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop',
                category: 'chicken',
                ingredients: ['Chicken breast', 'Breadcrumbs', 'Marinara sauce', 'Mozzarella', 'Pasta'],
                nutritionalInfo: { calories: 680, protein: '52g', carbs: '45g', fat: '28g' }
            },

            // STEAKS CATEGORY
            {
                name: 'Ribeye Steak',
                description: 'Premium ribeye steak grilled to perfection',
                price: 29.99,
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop',
                category: 'steaks',
                ingredients: ['Ribeye steak', 'Garlic butter', 'Mashed potatoes', 'Asparagus'],
                nutritionalInfo: { calories: 720, protein: '58g', carbs: '24g', fat: '42g' },
                isFeatured: true
            },
            {
                name: 'Filet Mignon',
                description: 'Tender filet mignon with red wine reduction',
                price: 34.99,
                image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=800&auto=format&fit=crop',
                category: 'steaks',
                ingredients: ['Filet mignon', 'Red wine reduction', 'Roasted vegetables', 'Potatoes'],
                nutritionalInfo: { calories: 650, protein: '48g', carbs: '22g', fat: '38g' }
            },

            // SANDWICHES CATEGORY
            {
                name: 'Club Sandwich',
                description: 'Triple-decker with turkey, bacon, lettuce, and tomato',
                price: 13.99,
                image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=800&auto=format&fit=crop',
                category: 'sandwiches',
                ingredients: ['Turkey', 'Bacon', 'Lettuce', 'Tomato', 'Mayo', 'Toast'],
                nutritionalInfo: { calories: 520, protein: '32g', carbs: '38g', fat: '26g' }
            },
            {
                name: 'Philly Cheesesteak',
                description: 'Sliced steak with peppers, onions, and cheese',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop',
                category: 'sandwiches',
                ingredients: ['Sliced steak', 'Bell peppers', 'Onions', 'Provolone cheese', 'Hoagie roll'],
                nutritionalInfo: { calories: 620, protein: '38g', carbs: '42g', fat: '32g' }
            },

            // SOUPS CATEGORY
            {
                name: 'Tomato Basil Soup',
                description: 'Creamy tomato soup with fresh basil',
                price: 7.99,
                image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&auto=format&fit=crop',
                category: 'soups',
                ingredients: ['Tomatoes', 'Fresh basil', 'Cream', 'Garlic', 'Onions'],
                nutritionalInfo: { calories: 180, protein: '4g', carbs: '22g', fat: '8g' }
            },
            {
                name: 'Chicken Noodle Soup',
                description: 'Classic chicken soup with vegetables and noodles',
                price: 8.99,
                image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&auto=format&fit=crop',
                category: 'soups',
                ingredients: ['Chicken', 'Egg noodles', 'Carrots', 'Celery', 'Onions'],
                nutritionalInfo: { calories: 220, protein: '18g', carbs: '28g', fat: '6g' }
            },

            // BREAKFAST CATEGORY
            {
                name: 'Pancake Stack',
                description: 'Three fluffy pancakes with maple syrup and butter',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&auto=format&fit=crop',
                category: 'breakfast',
                ingredients: ['Pancakes', 'Maple syrup', 'Butter', 'Berries'],
                nutritionalInfo: { calories: 520, protein: '12g', carbs: '78g', fat: '18g' }
            },
            {
                name: 'Eggs Benedict',
                description: 'Poached eggs on English muffin with hollandaise sauce',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&auto=format&fit=crop',
                category: 'breakfast',
                ingredients: ['Poached eggs', 'English muffin', 'Ham', 'Hollandaise sauce'],
                nutritionalInfo: { calories: 480, protein: '24g', carbs: '32g', fat: '28g' }
            },

            // HEALTHY CATEGORY
            {
                name: 'Quinoa Power Bowl',
                description: 'Quinoa with roasted vegetables and tahini dressing',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&auto=format&fit=crop',
                category: 'healthy',
                ingredients: ['Quinoa', 'Roasted vegetables', 'Tahini dressing', 'Seeds', 'Greens'],
                nutritionalInfo: { calories: 380, protein: '16g', carbs: '52g', fat: '14g' },
                isFeatured: true
            },
            {
                name: 'Acai Bowl',
                description: 'Acai smoothie bowl with granola and fresh fruits',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=800&auto=format&fit=crop',
                category: 'healthy',
                ingredients: ['Acai puree', 'Granola', 'Fresh berries', 'Banana', 'Honey'],
                nutritionalInfo: { calories: 320, protein: '8g', carbs: '58g', fat: '8g' }
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

addMoreCategories();