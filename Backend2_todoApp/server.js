const express= require('express');
const app = express();
// const cors = require('cors'); // Add this line
// const mongoose= require('mongoose');

// load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware to parse json request body
app.use(express.json());
// app.use(cors()); // Enable CORS for all routes
// import routes for Todo API
const todoRoutes = require('./routes/todo');
// mount the todo API routes
 app.use("/api/v1", todoRoutes);
// now the server 
app.listen(3000,()=>{
    console.log(`server started on port 3000`)
})
// connect to the database 
const dbConnect= require('./config/database');
dbConnect();

// default route
app.get("/",((req,res)=>{
    res.send(`<h1> This is the home page</h1>`)
}))
module.exports=app;