const mongoose=require('mongoose');
const Joi=require('joi');

function addCategoryValidation(user_val)
{
    const schema=Joi.object({
        categoryimage:Joi.string().messages({
            'string.empty': `"categoryimage" cannot be an empty field`,
            'any.required': `"categoryimage" is a required field`
           }),
        categoryname:Joi.string().required().messages({
            'string.base': `"categoryname" should be a type of 'text'`,
            'string.empty': `"categoryname" cannot be an empty field`,
            'any.required': `"categoryname" is a required field..`
           })
    });
        return schema.validate(user_val);
}


exports.addCategoryValidation=addCategoryValidation;