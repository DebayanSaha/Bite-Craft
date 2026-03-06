const express = require('express');
const router = express.Router();
const authMidleware = require('../middlewares/auth.midlewares')
const partnerController = require('../controllers/partner.controller')

//protected route for user to see food partner profile
router.get('/:id', authMidleware.authUserMiddleware, partnerController.getPartnerById)

module.exports = router;