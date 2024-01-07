const express= require('express');
const jwt = require('jsonwebtoken');
const router= express.Router();
exports.auth=(req,res, next)=>{
    const JWT_secret="ckjmbgds";
    try {
        // extract JWT token
        const token = req.body.token || req.cookies.token|| req.header("Authorization").replace("Bearer ","");
        if(!token){
            return res.status(401).json({
                success:false,
                message:'Token Missing '
            })

        }

        // verify the token 
        try{
            const decode =jwt.verify(token,JWT_secret);
            console.log(decode);
            req.user=decode;
          
        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:'Invalid Token '
            })
        }
        next();
    }
    catch(error) {
            return res.status(401).json({
                success:false,
                message:'Something went wrong while verifying the token'
            })
    }
}
exports.isStudent=(req,res)=>{
    try {
        if(req.user.role!="student"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for students'
            })
        }   
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success:false,
            message:'Unable to match role '
        })  
    }

}
exports.isAdmin=(req,res)=>{
    try {
        if(req.user.role!="admin"){
            return res.status(401).json({
                success:false,
                message:'This is a protected route for admin'
            })
        }   
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success:false,
            message:'Unable to match role '
        })  
    }

}