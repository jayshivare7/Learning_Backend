const express=require('express');
const app= express();

// middleware to parse JSON
app.use(express.json());

// file upload middleware 
const fileupload= require("express-fileupload");
app.use(fileupload({useTempFiles : true,
    tempFileDir : '/tmp/'}));
// connecting to the database
    const db=require("./config/database");
db.connect();

// connnecting to the cloudinary
const cloudinaryDb= require("./config/cloudinary");
cloudinaryDb.cloudinaryConnect();
// including routes
const Upload= require("./Routes/FileUpload");
app.use("/api/v1/upload",Upload);

// listen app on the port no 
app.listen(4000,()=>{
    console.log("app started on port no 4000");
});