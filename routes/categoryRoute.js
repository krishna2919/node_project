
const categoryController=require('../controller/categoryController');
const express=require('express');
const upload=require('../helper/upload');
const  router=express.Router();
const auth=require('../helper/auth');



router.post('/addCategory',auth.verifyToken,upload.single('categoryimage'),categoryController.addCategory);
router.get('/viewCategory',auth.verifyToken,categoryController.viewAllCategory);
router.post('/updateCategory/:id',auth.verifyToken,upload.single('categoryimage'),categoryController.update);
router.post('/deleteCategory/:ids',auth.verifyToken,categoryController.deleteCategory);
module.exports=router;