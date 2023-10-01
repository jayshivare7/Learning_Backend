const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const blogs = require('./routes/blogs');
// mount the todo API routes
 app.use("/api/v1", blogs);

app.listen(4000,() =>{
console.log("Server Started on port no 3000");
});
const dbConnect = require('./database/database');
dbConnect();

module.exports=app;