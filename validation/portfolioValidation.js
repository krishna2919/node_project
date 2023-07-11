const mongoose=require('mongoose');
const Joi=require('joi');

function addPortfolioValidation(user)
{
    const schema=Joi.object({
        images:Joi.string().messages({
            'string.empty': `"image" cannot be an empty field`,
            'any.required': `"image" is a required field`
           }),
        portfolioName:Joi.string().required().messages({
            'string.base': `"portfolioName" should be a tyepe of text'`,
            'string.empty': `"portfolioName" cannot be an empty field`,
            'any.required': `"portfolioName" is a required field..`
           }),
           title:Joi.string().required().messages({
            'string.base': `"title" should be a tyepe of text'`,
            'string.empty': `"title" cannot be an empty field`,
            'any.required': `"title" is a required field..`
           }),
           date:Joi.date().required().messages({
            'any.required': `"date" is a required field..`
           }),
           description:Joi.string().required().messages({
            'string.base': `"description" should be a tyepe of text'`,
            'string.empty': `"description" cannot be an empty field`,
            'any.required': `"description" is a required field..`
           }),
           category:Joi.string().messages({
            'any.required':`"category" is required` 
           })
    });
        return schema.validate(user);
}


exports.addPortfolioValidation=addPortfolioValidation;