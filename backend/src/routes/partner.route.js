const express = require('express');
const router = express.Router();
const authMidleware = require('../middlewares/auth.midlewares')
//protected route for user to see food partner profile
router.get('/:id', authMidleware.authUserMiddleware, )