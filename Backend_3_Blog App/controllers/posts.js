const Posts=require('../models/Posts');
exports.Posts= async (req,res)=>{
try{
const posts= await Posts.find({});

res.status(200).json({
    success:true,
    data:posts,
    messages:"All Posts fectched successfully"
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
exports.createPost= async (req,res)=>{
    try{
        const {title,desc}= req.body;
    const post= await Posts.create({title,desc});
    
    res.status(200).json({
        success:true,
        data:post,
        messages:"Entry Created Successfully"
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