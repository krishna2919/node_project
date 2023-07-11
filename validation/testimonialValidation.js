const mongoose=require('mongoose');
const Joi=require('joi');

function addTestimonialValidation(user_val)
{
    const schema=Joi.object({
       
        testimonialName:Joi.string().required().messages({
            'string.base': `"name" should be a tyepe of text'`,
            'string.empty': `"name" cannot be an empty field`,
            'any.required': `"name" is a required field..`
           }),
           designation:Joi.string().required().messages({
            'string.base': `"desgination" should be a tyepe of text'`,
            'string.empty': `"desgination" cannot be an empty field`,
            'any.required': `"desgination" is a required field..`
           }),
           discription:Joi.string().required().messages({
            'string.base': `"discription" should be a tyepe of text'`,
            'string.empty': `"discription" cannot be an empty field`,
            'any.required': `"discription" is a required field..`
           }),
          
           testimonialimage:Joi.string().messages({
            'any.required':`"images" is a required field`
           })
    });
        return schema.validate(user_val);
}


exports.addTestimonialValidation=addTestimonialValidation;