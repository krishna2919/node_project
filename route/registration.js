

const express=require('express');
const bcrypt=require('bcrypt');
const registrationController=require('../controller/registrationRoute');
const router=express.Router();

router.post('/adduser',registrationController.registration);

module.exports=router;