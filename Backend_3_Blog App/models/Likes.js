
const mongoose= require('mongoose');

const likes= new mongoose.Schema({
post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Posts"
},
user:{
type: String,
required:true,
}

});

module.exports = mongoose.model("Likes",likes);