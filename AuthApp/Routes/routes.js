const express = require('express');
const mongoose = require('mongoose');
const router= express.Router();
const {login,signup}=require('../Controllers/auth');
const {auth,isStudent,isAdmin}= require('../middleWare/Auth')
router.post("/login",login);
router.post("/signup",signup);
// testing protected routes for singe middleware
router.get("/test", auth, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the Protected route for students"
    });
});

// protected route
router.get("/student",auth,isStudent,(req,res)=>{
res.json({
    success:true,
    message:"Welcome to the Protected route for students"
})
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the Protected route for Admin"
    })

})
module.exports = router;