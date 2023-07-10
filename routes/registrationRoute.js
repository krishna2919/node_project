
 const express=require('express')
 const upload=require('../helper/upload');
const  router=express.Router();
const registerApi=require('../controller/registrationapi');
const genrateToken=require('../helper/auth');

//for add user route
router.post('/adduser',upload.single('profilepic'),registerApi.adduser);

//for login user route
router.post('/login',genrateToken.genrateToken,registerApi.loginuser);


//for view profile route
router.get('/view',genrateToken.verifyToken,registerApi.viewprofileuser);


//for get otp route
router.post('/getotp',registerApi.forgotpassuser);

//for check otp route
router.post('/checkotp',registerApi.checkotp);

//for add new password route
router.put('/newpassword',registerApi.newpassworduser);


//for reset password route
router.post('/resetpassword',genrateToken.verifyToken,registerApi.resetpassword);

//for update route
router.post('/updateprofile',genrateToken.verifyToken,upload.single('profilepic'),registerApi.updateprofileuser);

module.exports=router;