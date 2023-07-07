const mongoose=require('mongoose');
const userValidation=require('../validation/userValidation');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowerCase:true
    },
    password: {
        type: String,
        required: true,
        maxlength:250,
        trim:true,
        isStrongPassword:{
          minlength:8,
          minLowercase:1,
          minNumber:1,
          minUppercase:1
        }

      },
    
      
      profilePic: {
        type:String,
        required:true
      },
      hobbies:{
        type:Array,
        required:true,
        minlength:1,
        maxlength:3
      },
      address:{
        type:String,
        required:true
      },
      gender:{
        type:String,
        enum:["male","female","other"],
        required:true
      }
})

const User = new mongoose.model("user",userSchema);

module.exports=User;