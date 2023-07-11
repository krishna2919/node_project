const contactapi=require('../controller/contactapi');
const express=require('express');
const upload=require('../helper/upload');
const  router=express.Router();
const auth=require('../helper/auth');



router.post('/addContact',auth.verifyToken,contactapi.addContact);
 router.get('/viewContact',auth.verifyToken,contactapi.viewAllContact);
router.post('/updateContact/:id',auth.verifyToken,contactapi.contactUpdate);
 router.delete('/deleteContact/:ids',auth.verifyToken,contactapi.deleteContact);
module.exports=router;