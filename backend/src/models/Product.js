const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['burgers', 'pizza', 'pasta', 'salads', 'desserts', 'appetizers', 'seafood', 'beverages', 'chicken', 'steaks', 'sandwiches', 'soups', 'breakfast', 'healthy', 'other']
    },
    ingredients: [String],
    nutritionalInfo: {
        calories: Number,
        protein: String,
        carbs: String,
        fat: String
    },
    availability: {
        type: Boolean,
        default: true
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;