const mongoose = require('mongoose');
const url="mongodb+srv://jayshivare1973:ckjmbgds@cluster0.goeuybg.mongodb.net/AuthAPPA";
exports.connectDb=()=>{
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