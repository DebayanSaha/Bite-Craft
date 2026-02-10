const foodPartnerModel = require('../models/foodPartner.models')
const storageService = require('../services/storage.service')
const { v4:uuid } = require('uuid')

async function createFood(req,res){

    console.log(req.foodPartner)

    console.log(req.body);

    console.log(req.file);

    // const fileUpload = await storageService.uploadFile(req.video.buffer, uuid())
    // console.log(fileUpload);
    
    res.send('Food item created')
}

module.exports={
    createFood
}