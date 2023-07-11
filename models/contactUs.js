const mongoose=require('mongoose');
const Joi=require('joi');

const contactusSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        trim:true,
        unique:true
     },
     msg:{
        type:String,
        required:true,
     },
     phonenumber: {
        type: Number,
        required: true,
        unique: true,
      },
     date: {
          type: Date,
        required: true,
        default:Date.now
      }
      
});
const Contact=mongoose.model('contact',contactusSchema);


exports.Contact=Contact;
exports.contactusSchema=contactusSchema;