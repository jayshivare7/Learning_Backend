const mongoose= require('mongoose');
require("dotenv").config();

const dbConnect=()=>{
mongoose.connect(process.env.DATABASE_URL,{
useNewUrlParser:true,
useUnifiedTopology:true

})
.then(()=>console.log("connection ho gya "))
.catch((error)=>{
    console.log("connction nhi hua ")
    console.error(error.message)
    // process.exit(1);
    
})
}
module.exports = dbConnect;