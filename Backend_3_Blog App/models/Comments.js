const mongoose = require("mongoose");

const comments = new mongoose.Schema({
  posts: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Posts",
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", comments);
