const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Coupon = require('./src/models/Coupon');

dotenv.config();

async function testCoupon() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');

    // Create a test coupon
    const testCoupon = new Coupon({
      code: 'WELCOME10',
      discountType: 'percentage',
      discountValue: 10,
      minimumOrderAmount: 20,
      maxDiscountAmount: 50,
      usageLimit: 100,
      expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      createdBy: new mongoose.Types.ObjectId() // Dummy admin ID
    });

    await testCoupon.save();
    console.log('✅ Test coupon created:', testCoupon.code);

    // Create another coupon
    const testCoupon2 = new Coupon({
      code: 'SAVE5',
      discountType: 'fixed',
      discountValue: 5,
      minimumOrderAmount: 15,
      expiryDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
      createdBy: new mongoose.Types.ObjectId()
    });

    await testCoupon2.save();
    console.log('✅ Test coupon 2 created:', testCoupon2.code);

    console.log('✅ Coupon system ready for testing!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

testCoupon();