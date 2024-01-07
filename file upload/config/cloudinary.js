const cloudinary= require("cloudinary").v2;
const API_SECRET="Wzhmidw8IMsjEsXfv4LS9JBfj3Y";
const API_KEY="387915651657155";
const CLOUD_NAME="diire87yu";
const url="mongodb+srv://jayshivare7:ckjmbgds@cluster0.vtriclr.mongodb.net/FileUploadDBNew";
exports.cloudinaryConnect = () => {
    try{
            cloudinary.config({
                cloud_name:CLOUD_NAME,
                api_key:API_KEY,
                api_secret:API_SECRET,
            })
    }
    catch(error) {
        console.log(error);
    }
}