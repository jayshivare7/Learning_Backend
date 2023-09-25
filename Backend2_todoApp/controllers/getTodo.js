// importing models
const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
    try {
        // finding all objects from db and storing in todos variable
        const todos=await Todo.find({});

// response 
      res.status(200)
        .json({
        success: true,
        data: todos,
        message: "All data fetched successfully",
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

  // now for fetching the data from given id
  exports.getTodoById = async (req, res) => {
    try {
        // finding the id from the request
        const id=req.params.id;
        // finding object from db with given id and storing in todo variable
        const todo = await Todo.findById({_id:id});

// response 

        if(!todo){
         return res.status(404)
          .json({
          success: false,
          data: "Missing data",
          message: "Data for given id is not found",
        });}

  res.status(200)
        .json({
        success: true,
        data: todo,
        message: `Data for ${id} is found`,
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


  