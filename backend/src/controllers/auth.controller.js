const userModel = require('../models/user.models');

async function registerUser(req,res){

    const {firstName, lastName, email, password} = req.body;

    //for checking if user exists with this email 
    const userExists = await userModel.findOne({email});

    if(userExists){
        return res.status(400).json({
            message:"User already exists"
        })
    }
}