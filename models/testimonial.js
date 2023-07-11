const mongoose=require('mongoose');
const Joi=require('joi');


const testimonialSchema=new mongoose.Schema({
   
    testimonialName:{
        type:String,
        required:true
    },
 
    designation:{
        type:String,
        required:true
    },
    testimonialimage:{
        
        type:String
    },
    discription:{
        required:true,
        type:String
    }
    
});
const Testimonial=mongoose.model('testimonial',testimonialSchema);


exports.Testimonial=Testimonial;
exports.testimonialSchemaSchema=testimonialSchema;