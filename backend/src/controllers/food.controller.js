const foodItemModel = require('../models/food.models')
const storageService = require('../services/storage.service')
const { v4:uuid } = require('uuid')

async function createFood(req,res){

    console.log(req.foodPartner)
    console.log(req.body);
    console.log(req.file);

    const fileUpload = await storageService.uploadFile(req.file.buffer, uuid())
    
    const foodItem = await foodItemModel.create({
        foodName: req.body.foodName,
        video: fileUpload.url,
        description: req.body.description,
        foodpartner: req.foodPartner._id
    })
    
    res.status(201).json({
        message:"Food Item created",
        food: foodItem
    })
}

async function getFoodItems(req,res) {
    const items = await foodItemModel.find({}).populate("foodpartner");
    res.status(200).json({
        message:"Food items fetched successfully",
        items
    })
}

module.exports={    
    createFood, getFoodItems
}