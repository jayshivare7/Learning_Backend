const mongoose = require("mongoose");

// Here is the schema --> todoSchema 
const todoSchema = new mongoose.Schema({
  title: {
    type: String, // type of data in the title 
    required: true,
    maxLength: 50, 
  },
  description: {
    type: String,
    required: true,
    maxLength: 50, // maximum length of the description
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(), //default value 
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});
// this statement is required for exporting the model 
// and this is exporting the todoSchema but with the name "Todo"
module.exports = mongoose.model("Todo", todoSchema);
