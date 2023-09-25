const Todo= require('../models/Todo')

exports.deleteTodo= async (req,res)=>{
try{
    // finding the id
const {id}= req.params;
// now deleting the item by id
const todo = await Todo.findByIdAndDelete(id);

// response 
res.status(200)
.json({
success: true,
data: todo,
message: "Deleted Data Successfully",
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

