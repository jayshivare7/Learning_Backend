const Comments=require('../models/Comments');
const Post = require('../models/Posts');
exports.commenti= async (req,res)=>{
try{
    //   exteracting post user and body from req.body
    const {post,user,body}=req.body;
    // creating a comment object
    const comment= new Comments({post,user,body});
    // now saving the comment in the database
    const savedComment= await comment.save();
    // now find the post by ID , add the new comment to its comments array
    const updatedPost = await Post.findByIdAndUpdate(post, {$push:{comments: savedComment._id}}, {new:true})
   .populate("comments") // populate the comments array with comment documents
   .exec();

    res.json({
   
    post:updatedPost,
    messages:"Comment Added successfully"
})
}
catch(err){
    console.error(err);
    res.status(500).json({
      success: false,
      data: "server error",
      message: err.message,
    }); 

}

}
exports.findComments= async (req,res)=>{
    try{

    const comments= await Comments.find().populate("comments").exec();
    
    res.status(200).json({
        success:true,
        data:comments,
        messages:"Comments Fetched Successfully"
    })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
          success: false,
          data: "server error",
          message: err.message,
        }); 
    
    }}