const mongoose= require('mongoose');
const dbUrl='mongodb://127.0.0.1:27017/blogDB'
const dbConnect=()=>{
mongoose.connect(dbUrl,{
    // useUrlParser: true,
    useUnifiedTopology: true
})

.then(()=>console.log("Connection Established"))
.catch((err)=>{
console.log("Connection Unable to Established");
console.log(err.message);

})

}
module.exports= dbConnect;