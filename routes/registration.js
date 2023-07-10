// const {User,validate}=require('../models/user');
// const bcrypt=require('bcrypt');
 const express=require('express');
// const _=require('lodash');
 const upload=require('../helper/upload');
const  router=express.Router();
const registrationController=require('../controller/registrationController');
const genrateToken=require('../helper/auth');
//User Registration

router.post('/adduser',upload.single('profilepic'),registrationController.registration);
router.post('/login',genrateToken.genrateToken,registrationController.login);
//forgot password
router.post('/forgotpassword',registrationController.forgotPassword);
router.post('/checkotp',registrationController.checkotp);
router.put('/newpassword',registrationController.newpassword);

router.get('/viewprofile',genrateToken.verifyToken,registrationController.viewprofile);
router.post('/resetpassword',genrateToken.verifyToken,registrationController.resetpassword);
router.post('/updateprofile',genrateToken.verifyToken,upload.single('profilepic'),registrationController.updateprofile);

module.exports=router;