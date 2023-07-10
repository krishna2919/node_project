const mongoose=require('mongoose');
const Joi=require('joi');
const validate=require('../validation/registrationValidation');
const registrationSchema=new mongoose.Schema({
profilepic:{
   
   type:String,
   required:true,
    
},
 name:{
    type:String,
    required:true,
    trim:true,
    minlength:3,
    maxlength:30,
    
 },
 email:{
    type:String,
    required:true,
    lowercase:true,
    trim:true,
    unique:true
 },
 address:{
    type:String,
    required:true,
   
 },
 hobbies:{
    type:Array,
    required:true,
    minlength:1,
    maxlength:3
 },
 gender:{
    type:String,
    required:true,
    enum:['female','male','other'],
    lowercase:true
 },
 password:{
    type:String,
    required:true,
    trim:true,
    maxlength:250,
    isStrongPassword: {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1
  },
 },
 confirm_password:{
    type:String,
    required:true,
    trim:true,
    minlength:8,
    maxlength:250
 }
});

const User=mongoose.model('Registration',registrationSchema);




exports.User=User;

exports.registrationSchema=registrationSchema;