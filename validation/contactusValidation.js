const mongoose=require('mongoose');
const Joi=require('joi');

function addConatctusValidation(user)
{
    const schema=Joi.object({
        
        name:Joi.string().required().messages({
            'string.base': `"name" should be a tyepe of text'`,
            'string.empty': `"name" cannot be an empty field`,
            'any.required': `"name" is a required field..`
           }),
           email:Joi.string().required().email().messages({
            'string.empty': `"email" cannot be an empty field`,
            'any.required': `"email" is a required field`
           }),
           msg:Joi.string().required().messages({
            'string.base': `"msg" should be a tyepe of text'`,
            'string.empty': `"msg" cannot be an empty field`,
            'any.required': `"msg" is a required field..`
           }),
           phonenumber:Joi.number().required().messages({
            'any.required':`"phonenumber" is a required field` 
           }),
           date:Joi.date().required().messages({
            'any.required': `"date" is a required field..`
           })

    });
        return schema.validate(user);
}


exports.addConatctusValidation=addConatctusValidation;