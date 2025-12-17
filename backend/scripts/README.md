# Backend Utility Scripts

This folder contains utility scripts for database management and testing.

## Available Scripts

### Database Management
- `cleanup-products.js` - Remove unwanted products from database
- `restore-basic-products.js` - Add basic products to database
- `check-products.js` - Check current products in database
- `make-admin.js` - Make a user admin

### Testing Scripts
- `test-add-cart.js` - Test cart functionality
- `test-cart.js` - Test cart operations
- `test-coupon.js` - Test coupon system
- `debug-user.js` - Debug user issues

### Legacy Scripts (Not recommended for use)
- `add-more-categories.js` - Adds many products (creates clutter)
- `add-more-foods.js` - Adds many products (creates clutter)
- `add-pasta-desserts.js` - Adds specific products (creates clutter)

## Usage

Run any script from the backend directory:
```bash
cd backend
node scripts/script-name.js
```

## Note
The legacy scripts are kept for reference but not recommended as they add too many products to the database.