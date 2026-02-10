const express = require('express');
const authMiddleware = require('../middlewares/auth.midlewares');
const foodController = require('../controllers/food.controller')
const router = express.Router();
const multer = require('multer')

const upload = multer({
    storage: multer.memoryStorage(),
})

router.post('/', authMiddleware.authFoodPartnerMiddleware, upload.single('video'), foodController.createFood);

module.exports = router;