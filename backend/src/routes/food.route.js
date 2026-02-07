const express = require('express');
const authMiddleware = require('../middlewares/auth.midlewares');
const foodController = require('../controllers/food.controller')
const router = express.Router();

router.post('/', authMiddleware.authFoodPartnerMiddleware, foodController.createFood);

module.exports = router;