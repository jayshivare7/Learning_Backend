const express = require('express');
const app = express();

const cookieParser= require('cookie-parser');
app.use(cookieParser());
app.use(express.json());
const autha= require('./Routes/routes');
// mount 
app.use("/api/v1",autha);

const db= require('./database/database');
db.connectDb();


app.listen(4000,()=>{
    console.log("App started at port no 4000");

})
// app.get('/',()=>{
//     console.log("Hello in this authentication app");
// })
module.exports = app;