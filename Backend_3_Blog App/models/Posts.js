
const mongoose= require('mongoose');

const posts= new mongoose.Schema({
title:{
    type:String,
    required:true,
},
desc:{
type: String,
required:true,
},
likes:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Likes"
}],
comments:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:"Comments"
}]

});

module.exports = mongoose.model("Posts",posts);