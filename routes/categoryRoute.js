
const categoryapi=require('../controller/categoryapi');
const express=require('express');
const upload=require('../helper/upload');
const  router=express.Router();
const auth=require('../helper/auth');



router.post('/addCategory',auth.verifyToken,upload.single('categoryimage'),categoryapi.addCategory);
router.get('/viewCategory',auth.verifyToken,categoryapi.viewAllCategory);
router.post('/updateCategory/:id',auth.verifyToken,upload.single('categoryimage'),categoryapi.update);
router.delete('/deleteCategory/:ids',auth.verifyToken,categoryapi.deleteCategory);
module.exports=router;