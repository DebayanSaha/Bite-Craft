const foodPartnerModel = require('../models/foodPartner.models')
const userModel = require('../models/user.models')
const jwt = require('jsonwebtoken')

async function authFoodPartnerMiddleware(req,res,next){

    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"Please log-in first"
        })
    }

    try {
        const decoded = jwt.verify(token , process.env.JWT_TOKEN);
        const foodPartner = await foodPartnerModel.findById(decoded.id);

        req.foodPartner = foodPartner;
        next();

    } catch (err) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }
} 

async function authUserMiddleware(req,res,next) {
    const token = req.cookies.token;
    
    if(!token){
        return res.status(401).json({
            message:"Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_TOKEN)

        const user = await userModel.findById(decoded.id);

        req.user = user;
        next();
    } catch (err) {
        return res.status(401).json({
            message:"Invalid token"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware, authUserMiddleware
};