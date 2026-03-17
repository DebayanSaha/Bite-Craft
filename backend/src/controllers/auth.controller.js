const { json } = require("express");

const userModel = require("../models/user.models");

const foodPartnerModel = require('../models/foodPartner.models');

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
  const { firstName, lastName, email, password } = req.body;

  //for checking if user exists with this email
  const userExists = await userModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({
      message: "User already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_TOKEN,
  );

  res.cookie("token", token, {
    httpOnly: true,       // cannot be accessed by frontend JS
    secure: true,         // must be true for HTTPS
    sameSite: 'None',     // allow cross-site requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(201).json({
    message: "User registered succesfully",
    user: {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (!userExists) {
    return res.status(400).json({
      message: " Invalid email or password",
    });
  }

  const isPassword = await bcrypt.compare(password, userExists.password);
  

  if (!isPassword) {
    return res.status(400).json({
      message: "Invalid email or password",
    });
  }

  const token = jwt.sign(
    {
      id: userExists._id,
    },
    process.env.JWT_TOKEN,
  );

  res.cookie("token", token, {
    httpOnly: true,       // cannot be accessed by frontend JS
    secure: true,         // must be true for HTTPS
    sameSite: 'None',     // allow cross-site requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: "Login succesfull",
    user: {
      _id: userExists._id,
      email: userExists.email,
      firstName: userExists.firstName,
      lastName: userExists.lastName,
    },
  });
}

async function logoutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message:"User logged out successfully"
  });
}

async function registerFoodPartner(req,res){
  const { firstName, lastName, email, phoneNo, storeName, address, password } = req.body;

  const isExists = await foodPartnerModel.findOne({$or:[{email}, {phoneNo}]});
  
  if(isExists){
    return res.status(400).json({
      message:"User already exists"
    })
  }

  const hashedPass = await bcrypt.hash(password , 10);

  const foodPartner = await foodPartnerModel.create({
    firstName,
    lastName,
    email,
    storeName,
    address,
    phoneNo,
    password: hashedPass,
  })

  const token = jwt.sign({
    id: foodPartner._id,
  },process.env.JWT_TOKEN);

  res.cookie('token',token);

  res.status(201).json({
    message:" Food partner successfully registered",
    foodPartner:{
      _id: foodPartner._id,
      email: foodPartner.email,
      firstName: foodPartner.firstName,
      lastName: foodPartner.lastName,
      phoneNo: foodPartner.phoneNo,
      storeName: foodPartner.storeName,
    }
  })
}

async function loginFoodPartner(req, res) {
  const { email, password, phoneNo } = req.body;

  const userExists = await foodPartnerModel.findOne({$or:[{email},{phoneNo}]});

  if (!userExists) {
    return res.status(400).json({
      message: " Invalid email or password or Phone no",
    });
  }

  const isPassword = await bcrypt.compare(password, userExists.password);

  if (!isPassword) {
    return res.status(400).json({
      message: "Invalid email or password or Phone no",
    });
  }

  const token = jwt.sign(
    {
      id: userExists._id,
    },
    process.env.JWT_TOKEN,
  );

  res.cookie("token", token, {
    httpOnly: true,       // cannot be accessed by frontend JS
    secure: true,         // must be true for HTTPS
    sameSite: 'None',     // allow cross-site requests
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: "Login succesfull",
    user: {
      _id: userExists._id,
      email: userExists.email,
      firstName: userExists.firstName,
      lastName: userExists.lastName,
    },
  });
}

async function logoutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message:"Food partner logged out successfully"
  });
}


module.exports = {
  registerUser, loginUser, logoutUser,
  registerFoodPartner , loginFoodPartner , logoutFoodPartner,
};
