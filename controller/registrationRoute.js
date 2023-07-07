const express=require('express');
const bcrypt=require('bcrypt');
const validate=require('../validation/userValidation');
const {User} =require('../model/registrationSchema');
const _ =  require('lodash');
const router=express.Router();

const upload=require('../helper/upload');

const registration = async(req,res)=>{
    console.log('kisu',req.body);
    const { error } = validate.registrationValidationSchema(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
//   let user=await User.findOne({email:req.body.email}).exce();
//   if (user) return res.status(400).send('User already registerd');
//     console.log(req.body.email);
    
    // let user = await User.findOne({ email: req.body.email}); 

    // if (user) {
    //    return res.status(400).json({ error: "A user with this email already exist..."});
    // }

  let user = new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    profilePic:req.body.profilePic,
    hobbies:req.body.hobbies,
    address:req.body.address,
    gender:req.body.gender
  });

  await user.save();
  res.send(_.pick(user,['_id','name','email','password',
'profilePic','hobbies','address','gender']));
    
const salt=await bcrypt.genSalt(10);
user.password=await bcrypt.hash(user.password,salt);

};

module.exports = {
    registration
}