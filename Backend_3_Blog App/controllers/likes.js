const Like=require('../models/Likes');
const Post = require('../models/Posts');
exports.likePost= async (req,res)=>{
try{
    //   exteracting post user and body from req.body
    const {post,user,body}=req.body;
    // creating a comment object
    const like= new Like({post,user,body});
    // now saving the comment in the database
    const liked= await like.save();
    // now find the post by ID , add the new comment to its comments array
    const updatedPost = await Post.findByIdAndUpdate(post,{$push:{likes: liked._id}}, {new:true})
   .populate("likes") // populate the comments array with comment documents
   .exec();

    res.json({
   
    post:updatedPost,
    messages:"Liked successfully"
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
// for unlikung the posts 
exports.unlikePost= async (req,res)=>{
  try{
      //   extracting post and like id from req.body
      const {post,like}=req.body;
   
      const unliked= await Like.findOneAndDelete({post:post, _id:like});
      // now find the post by ID , add the new comment to its comments array
      const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes: unliked._id}}, {new:true})
     .populate("likes") // populate the comments array with comment documents
     .exec();
  
      res.json({
     
      post:updatedPost,
      messages:"Unliked successfully"
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