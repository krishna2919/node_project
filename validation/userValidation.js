const mongoose=require('mongoose');
const Joi=require('joi');
const user=require('../model/registrationSchema');

function registrationValidationSchema (user_val){
    const schema=Joi.object({
    name: Joi.string().required().messages({
        
        'string.empty':`name field can not be an empty`,
        'any.required':`name must be required`
     } ),
    email:Joi.string().required().email().messages({
        'any.required':'email must be required',
        'string.empty':'email can not be an empty'
    } ),
    password:Joi.string().required().messages({
        'any.required':'password must be required',
        'string.empty':'password can not be an empty',
        'string.base':'password must be have one uppercase and one lowercase',
        'string.min':'password length must be 8'
     } ),
     confirmPassword:Joi.valid(Joi.ref('password')).required().messages({
        'string.base':'password and confirm password must be same'
     }),

    profilePic:Joi.string().required().messages({
        'any.required':'profilePic must be required',
        'string.empty':'profile pic can not be empty',
    } ),
    hobbies:Joi.array().required().min(1).max(3).messages({
        'any.required':'please enter your hobbies',
        'string.min':'please add atleast 1 hobbies'
    }),
    address:Joi.string().required().messages({
        'any.required':'please enter your address',
        'string.base':'address must be in text'
    }),
    gender:Joi.string().required().messages({
        'any.required':`please choose your gender`,
    } )
  });

  return schema.validate(user_val);

}
exports.registrationValidationSchema =registrationValidationSchema ;





