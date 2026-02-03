const express =  require('express');
const authController = require('../controllers/auth.controller')

const router = express.Router();

router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.post('/user/logout', authController.logoutUser)


router.post('/partner/register', authController.registerFoodPartner)
router.post('/partner/login', authController.loginFoodPartner)
router.post('/partner/logout', authController.logoutFoodPartner)


module.exports = router;