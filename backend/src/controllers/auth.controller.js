const { json } = require("express");
const userModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

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

  const token = jwt.sign({
    id: user._id,
  },process.env.JWT_TOKEN)

  res.cookie("token",token);

  res.status(201).json({
    message: "User registered succesfully",
    user:{
        _id: user._id,
        emai: user.email,
        firstName: user.firstName,
        lastName: user.lastName
    }
  })

}

module.exports={
    registerUser
}