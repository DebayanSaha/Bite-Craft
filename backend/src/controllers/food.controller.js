const foodPartnerModel = require('../models/foodPartner.models')

async function createFood(req,res){

    console.log(req.foodPartner)

    console.log(req.body);
    console.log(req.file);
    
    res.send('Food item created')
}

module.exports={
    createFood
}