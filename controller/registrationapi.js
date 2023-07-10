const {User,validate}=require('../models/user');
const config=require('config');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const express=require('express');
const _=require('lodash');
const upload=require('../helper/upload');
const  router=express.Router();
const genrateToken=require('../helper/auth');
const validation=require('../validation/registrationValidation');
const {OTPsend}=require('../helper/sendEmail');
let otp =Math.floor(Math.random() *100000+1);



//for add user
module.exports.adduser=async (req,res)=>{
    console.log(req.body);
    const {error}=validation.registrationValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    
    let user = await User.findOne({ email: req.body.email });
    if (user) 
    {
        return res.status(400).send(' user already exisits!');
    } 
    else 
    {
        user = new User({
            name:req.body.name,
            address:req.body.address,
            hobbies:req.body.hobbies,
            gender:req.body.gender,
            email:req.body.email,
            password:req.body.password,
            confirm_password:req.body.confirm_password
        });
        if(req.file)
        {
            user.profilepic=req.file.path;
        }
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);
        await user.save();
        res.send(user);
    }

    
  

}



//for login user
module.exports.loginuser=async(req,res)=>{
    const {error}=validation.loginValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    // Check if this user already exisits
    let user = await User.findOne({ email: req.body.email });
    if (!user) 
    {
        return res.status(400).send(' Invalid email or password..');
    } 
    const validPassword=await bcrypt.compare(req.body.password,user.password);
    if(!validPassword) return res.status(400).send('Invalid email or password');

    const token=res.middlewareData;
    console.log('token',token);
    res.header('x-auth-token',token).send(token);
    
   }


   //for view user
module.exports.viewprofileuser=async(req,res)=>{
    
    let email=req.user.email;
    let user = await User.findOne({ email: email });
    if (!user) 
    {
        return res.status(400).send(' Enter valid email.');
    } 

     user=await User.find(user).select('-password');

    res.send(user);

}


   //for get otp
module.exports.forgotpassuser=async(req,res)=>{
    let user = await User.findOne({ email: req.body.email });
    if (!user) 
    {
        return res.status(400).send(' Enter valid email.');
    } 
    try
    {
        const sentMsg  = await OTPsend(user.email, otp);
        res.send('otp send to your mail id');
    }
    catch(err)
    {
        res.send('email is not valid..');
    }
    
}


//for check otp
module.exports.checkotp=async(req,res)=>{

    let user = await User.findOne({ email: req.body.email });
    if (!user) 
    {
        return res.status(400).send(' Enter valid email.');
    } 
    let userOtp=req.body.otp;

    if(otp==userOtp)
    {
        return res.send('Otp is correct..');
    }
    else
    {
        return res.send('Incorrect otp');
    }

}



//for add new password
module.exports.newpassworduser=async(req,res)=>{
    const {error}=validation.newPasswordValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) 
    {
        return res.status(400).send(' Enter valid email.');
    } 
    if(req.body.newpassword!=req.body.confirmpassword)
    {
        return res.send('password and confirm password should be same');
    }
    else
    {
        user.confirm_password=req.body.newpassword;
        const salt=await bcrypt.genSalt(10);
        req.body.newpassword=await bcrypt.hash(req.body.newpassword,salt);
       
        console.log(req.body.newpassword);
        user.password=req.body.newpassword;
        
        
        await user.save();
        return res.send(user);
    }
}



//for resetpassword  user

module.exports.resetpassword=async(req,res)=>{
    
    const email=req.user.email;
    let user = await User.findOne({email:req.user.email });
    if (!user) 
    {
        return res.status(400).send('Invalid user..');
    } 
    if(user)
    {

        const {error}=validation.resetpasswordValidation(req.body);
        if(error) 
        {
            return res.status(400).send(error.details[0].message);
        }
        if(req.body.newpassword!=req.body.confirmpassword)
        {
            return res.send('new password and confirm password do not match..');
        }
        else
        {
            const validPassword=await bcrypt.compare(req.body.oldpassword,user.password);
            if(!validPassword) return res.status(400).send('Invalid email or password');
            console.log(validPassword,'cvbn');
            user.confirm_password=req.body.newpassword;
            const salt=await bcrypt.genSalt(10);
            req.body.newpassword=await bcrypt.hash(req.body.newpassword,salt);
            user.password=req.body.newpassword;
            await user.save();
            res.send('password updated...');
        }
    }
    
    
}


//for update profile user

module.exports.updateprofileuser=async(req,res)=>{
    console.log('req',req);
    let email=req.user.email;
    let user = await User.findOne({ email: email });
    if (!user) 
    {
        return res.status(400).send(' Enter valid email.');
    } 
    
    if(user)
    {
        const {error}=validation.updateProfileValidation(req.body);
        if(error) 
        {
            return res.status(400).send(error.details[0].message);
        }
            const updateData = {
            name:req.body.name,
            address:req.body.address,
            hobbies:req.body.hobbies,
            gender:req.body.gender,
            email:req.body.email,
            profilepic:req.file.filename,
            };
            if(req.file)
            {
                updateData.profilepic=req.file.path;
            }
            const userUpdate = await User.updateOne({ email }, updateData);
            if(userUpdate) {
                console.log();
            }
            res.send("profile updated...");
    }
    else
    {
        res.send("Profile not updated")
    }

}