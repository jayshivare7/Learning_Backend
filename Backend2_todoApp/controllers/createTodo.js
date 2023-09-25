
// importing models
const Todo = require("../models/Todo");

// defining route handler

exports.createTodo = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description } = req.body;
    // create a new Todo Object and insert in Database
    const response = await Todo.create({ title, description });
    // send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
