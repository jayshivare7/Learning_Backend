const mongoose = require("mongoose");
const jwt= require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../Models/Users");
// signup route handler
exports.signup = async (req, res) => {
  try {
    // get data
    const { name, email, password, role } = req.body;
    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "user already exists",
      });
    }
    // secure password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
      });
    }

    // create entry for new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered,please try again later",
    });
  }
};

// login
exports.login = async (req, res) => {
  try {
    // data fetch
    const { email, password } = req.body;

    // validation -- that the data enetered carefully and correctly
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Enter Data Carefully",
      });
    }

    // now checking if user is already registered or not

    let user = await User.findOne({ email });
    JWT_SECRET="ckjmbgds"
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Please Register First",
      });
    }
    const payload={
        email:user.email,
        id:user._id,
        role:user.role
    }
    // verify password and generate jwt token
    if (await bcrypt.compare(password, user.password)) {
      // password matched
         let token=jwt.sign(payload,JWT_SECRET,{
            expiresIn:"2h"
         });
         user=user.toObject();
         user.token=token;
         user.password=undefined;
         const options={
            expires:new Date(Date.now()+ 3 * 24 * 60 * 60 * 1000),
            httpOnly:true
         }
         res.cookie("token",token,options).status(200).json({
            success:true,
            token,
            user,
            message:"User Logged in Successfully"
         })


      
    }
     else {
      // password do not match
      return res.status(403).json({
        success: false,
        message: "Please Enter Correct Password",
      });
    }
  } catch (err){
  console.log(err);
    return res.status(500).json({
      success: false,
      message: "Internal server Error",
    });
  }
};
