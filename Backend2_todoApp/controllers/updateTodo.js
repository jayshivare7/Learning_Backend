// // // importing models
const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
       const {id}= req.params;
       const {title,description}= req.body;
       const todo = await Todo.findByIdAndUpdate(
          {_id: id},
          {title:title , description:description, updatedAt: Date.now()},

       )
// response 
      res.status(200)
        .json({
        success: true,
        data: todo,
        message: "Data updated successfully",
      });
    } 
    // error handling 
    catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        data: "server error",
        message: err.message,
      });
    }
  };



