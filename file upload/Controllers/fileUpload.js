const File=require("../Models/File");
const cloudinary=require("cloudinary").v2;

// local file upload function
exports.localFileUpload= async(req,res)=>{
try{

    // bringing file from the request
    const file=req.files.file;
    console.log("Files aa gyi bhai ",file);
    
    // defining the directory and the file name 
    // here the "files" is the folder in which image will be uploaded
    // __dirname is the keyword that  returns the directory name of the current module
    let path=__dirname +"/files/" + Date.now() + `.${file.name.split(".")[1]}`;
    

    // this file.mv function is used for moving the files
    // this is depicting  that move the file to the path described
    file.mv(path,(err)=>{
        console.log(err)
    });
    res.json({
        success: true,
        message: "Local File uploaded successfully"
    })
}
catch(err){
    console.log("in the catch block")
    console.log(err);
}
}

// image upload to cloudinary


// checking if the file type of the file to be uploaded is supported or not
function checkFileType(supportedtype,type){
    return supportedtype.includes(type);
}

// function to upload the file to the cloudinary
async function uploadFileTocloudinary(file,folder,quality){
const options={folder};
options.resource_type="auto"; //this line make the resource type of file automatic according to the type of file
// if quality exist then reduce the size according to the quality and then upload --:
if(quality){
    options.quality=quality;
}
return await cloudinary.uploader.upload(file.tempFilePath,options)
}

exports.imageUpload= async(req,res)=>{
    try {
        // data fetch
const {name,tags,email}= req.body;
console.log(name,email,tags);
const file=req.files.imageFile;
console.log(file);


// validation
const supportedtype=["jpg","jpeg","png"];
const type=file.name.split(".")[1];
if(!checkFileType(supportedtype,type)){
    console.log(type)
    return res.status(400).json({
        success:false,
        message:"File type not supported"
    })

    }
    // if file type(format) is supported
const response= await uploadFileTocloudinary(file,"Shivare");
console.log(response)

// creating entry on DB
const fileData=File.create({
    name,
    email,
    tags,
    imageUrl:response.secure_url
})


res.status(200).json({
    success:true,
    message:"image successfully uploaded on Cloudinary",
})
    }
    catch (error) {
 console.log(error)
        
} }

// video upload
exports.videoUpload= async(req,res)=>{
    try {
        // data fetch
const {name,tags,email}= req.body;
console.log(name,email,tags);
const file=req.files.videoFile;
console.log(file);


// validation
const supportedtype=["mp4","mov"];
const type=file.name.split(".")[1];
if(!checkFileType(supportedtype,type)){
    console.log(type)
    return res.status(400).json({
        success:false,
        message:"File type not supported"
    })

    }
    // if file type(format) is supported
const response= await uploadFileTocloudinary(file,"Shivare");
console.log(response)

// creating entry on DB
const fileData=File.create({
    name,
    email,
    tags,
    videoUrl:response.secure_url
})


res.status(200).json({
    success:true,
    message:"video successfully uploaded on Cloudinary",
})
    }
    catch (error) {
 console.log(error)

} }


// image Size Reducing and then upload
exports.imageReducerUpload= async(req,res)=>{
    try {
        // data fetch
const {name,tags,email}= req.body;
console.log(name,email,tags);
const file=req.files.imageFile;
console.log(file);


// validation
const supportedtype=["jpg","jpeg","png"];
const type=file.name.split(".")[1];
if(!checkFileType(supportedtype,type)){
    console.log(type)
    return res.status(400).json({
        success:false,
        message:"File type not supported"
    })

    }
    // if file type(format) is supported
const response= await uploadFileTocloudinary(file,"Shivare",90);
console.log(response)

// creating entry on DB
const fileData=File.create({
    name,
    email,
    tags,
    imageUrl:response.secure_url
})


res.status(200).json({
    success:true,
    message:"Image successfully uploaded on Cloudinary with the reduced size",
})
    }
    catch (error) {
 console.log(error)
        
} }
