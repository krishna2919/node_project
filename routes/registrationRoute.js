
 const express=require('express')
 const upload=require('../helper/upload');
const  router=express.Router();
const registrationController=require('../controller/registrationController');
const genrateToken=require('../helper/auth');

//for add user route
router.post('/adduser',upload.single('profilepic'),registrationController.adduser);

//for login user route
router.post('/login',genrateToken.genrateToken,registrationController.loginuser);


//for view profile route
router.get('/view',genrateToken.verifyToken,registrationController.viewprofileuser);


//for get otp route
router.post('/getotp',registrationController.forgotpassuser);

//for check otp route
router.post('/checkotp',registrationController.checkotp);

//for add new password route
router.put('/newpassword',registrationController.newpassworduser);


//for reset password route
router.post('/resetpassword',genrateToken.verifyToken,registrationController.resetpassword);

//for update route
router.post('/updateprofile',genrateToken.verifyToken,upload.single('profilepic'),registrationController.updateprofileuser);

module.exports=router;