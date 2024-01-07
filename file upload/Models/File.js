const mongoose= require('mongoose');
const nodemailer= require('nodemailer');

const fileSchema=new mongoose.Schema({
name:{
type: 'String',
required: true
},
imageUrl:{
type: 'String',
},
tags:{
type:'String'
},
email:{
type:'String'    
}

});
// sending mail everytime the file is uploaded
const MAIL_HOST= "smtp.gmail.com"
const MAIL_USER="jayshivare8@gmail.com"
const MAIL_PASS="fggsuubqdnsyxqzu"

// .post is a post middleware that will call the function whenever save operation happens
fileSchema.post("save",async function(doc){
try {
    console.log("DOC",doc)
// transporter
let transporter=nodemailer.createTransport({

host:MAIL_HOST,
auth:{
    user:MAIL_USER,
    pass:MAIL_PASS
},




})
// send Mail
const info= await transporter.sendMail({
from:"Jay Shivare",
to:doc.email, //extracting the email address from the doc
subject:"New File Uploaded on cloudinary",
html:`<h2>File Uploaded</h2> <br> view now - <a href="${doc.fileUrl}">CLick Here</a>`

})
console.log(info);
} catch (error) {
    console.log(error)
}

})

// exporting the schema file 
const File= mongoose.model('File',fileSchema);
module.exports=File;