const express = require('express');
const router = express.Router();
// ✅ Import the new changePassword controller function
const { 
    register, 
    login, 
    getProfile, 
    updateProfile, 
    changePassword 
} = require('../controllers/authController'); 
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);
// ✅ NEW ROUTE: Fixes the PUT /api/auth/password 404 error
router.put('/password', protect, changePassword); 

module.exports = router;