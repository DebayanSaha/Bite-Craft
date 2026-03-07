const foodPartnerModel = require('../models/foodPartner.models');
const foodModel = require('../models/food.models')

async function getPartnerById(req,res){
    const partnerId = req.params.id;

    const partner = await foodPartnerModel.findById(partnerId);
    const foodItemsByPartner = await foodModel.find({partner:partnerId});

    if(!partner){
        return res.status(400).json({message: "Food Partner not found"});
    }
    res.status(200).json({
        message:"Food Partner found successfully",
        partner:{
            ...partner.toObject(), 
            foodItems: foodItemsByPartner
        }
    });
}
module.exports={
    getPartnerById
}