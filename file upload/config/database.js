const mongoose = require('mongoose');
const url="mongodb+srv://jayshivare7:ckjmbgds@cluster0.vtriclr.mongodb.net/FileUploadDBNew";
exports.connect=()=>{
    mongoose.connect(url,{
        useUnifiedTopology: true,
    })

.then(console.log("connection established"))
.catch((err)=>{
    console.log("connection failed");
    console.error(err);
    process.exit(1);
});
}