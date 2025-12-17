const mongoose = require('mongoose');
const Product = require('./src/models/Product');
require('dotenv').config();

const cleanupProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Get all products
        const allProducts = await Product.find({});
        console.log(`Found ${allProducts.length} total products`);

        // Keep only original user products (remove AI-generated ones)
        // These are typically the ones with generic descriptions or specific patterns
        const productsToKeep = allProducts.filter(product => {
            // Keep products that seem to be user-created (not AI generated)
            const aiGeneratedPatterns = [
                'herb-seasoned', 'premium', 'classic', 'fresh', 'creamy', 'tender',
                'grilled to perfection', 'with vegetables', 'reduction', 'triple-decker'
            ];
            
            const hasAiPattern = aiGeneratedPatterns.some(pattern => 
                product.description.toLowerCase().includes(pattern)
            );
            
            // Keep if it doesn't match AI patterns or if it's a simple, user-like product
            return !hasAiPattern || product.name.length < 20;
        });

        console.log(`Keeping ${productsToKeep.length} products`);
        console.log('Products to keep:', productsToKeep.map(p => p.name));

        // Delete all products first
        await Product.deleteMany({});
        console.log('Deleted all products');

        // Re-insert only the products to keep
        if (productsToKeep.length > 0) {
            const validCategories = ['burgers', 'pizza', 'pasta', 'salads', 'desserts', 'appetizers', 'seafood', 'beverages', 'chicken', 'steaks', 'sandwiches', 'soups', 'breakfast', 'healthy', 'other'];
            
            const cleanProducts = productsToKeep.map(p => ({
                name: p.name,
                description: p.description,
                price: p.price,
                image: p.image,
                category: validCategories.includes(p.category) ? p.category : 'other',
                ingredients: p.ingredients,
                nutritionalInfo: p.nutritionalInfo,
                availability: p.availability,
                isFeatured: false, // Reset featured status
                averageRating: p.averageRating || 0,
                totalReviews: p.totalReviews || 0
            }));
            
            await Product.insertMany(cleanProducts);
            console.log(`Restored ${cleanProducts.length} original products`);
        }

        console.log('✅ Product cleanup completed');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error:', error);
        process.exit(1);
    }
};

cleanupProducts();