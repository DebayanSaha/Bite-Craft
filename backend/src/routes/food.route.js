const express = require('express');

const authMiddleware = require('../middlewares/auth.midlewares');
const foodController = require('../controllers/food.controller')

const router = express.Router();
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage(),
})

//protected route for food partners to add food item
router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single('video'), foodController.createFood);

//protected route for users to see food item
router.get('/', authMiddleware.authUserMiddleware, foodController.getFoodItems)

// Protected out for users to like reel
router.post('/like', authMiddleware.authUserMiddleware, foodController.likeFood)

module.exports = router;