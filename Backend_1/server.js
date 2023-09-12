// Step 1 create a folder backend
// Step 2 npm init -y
// Step 3 open in VS Code
// Step 4 npm i express
// Step 5 create server.js

// Server Instantiate
const express = require("express");
const app = express();

// importing mongoose
const mongoose = require("mongoose");

// connnecting database with following uri to express server with the help of mongoose
mongoose
  .connect("mongodb://127.0.0.1:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //   this two things are mandatory for avoiding any warnings
  })

  // this is like  a try catch block that defines whether our connection established or not
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log("error he", error);
  });

// used to parse req.body in express ->PUT or POST
const bodyParser = require("body-parser");
// Specifically parse JSON data and it to the req.Body object
app.use(bodyParser.json());

// Serevr started on port 3001
app.listen(3001, () => {
  console.log("Server started at port no  3001");
});

// A get requet for route '/'
app.get("/", (req, res) => {
  res.send("Hello Jee Kaise hai aap");
});
// '/' --> is route pe res vala response send hoga
// jab bhi '/' route par aayege to res response milega
//  or ye ek get request hai --> app.get()

// this is a post request in which at route '/cars' ,
// I am getting name and brand at my console and this name and brand is coming from my postman api in which i hardcoded the name and brand,
// though this can be done in other ways also , we will learn ,now bye
app.post("/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("car submitted successfully");
});
