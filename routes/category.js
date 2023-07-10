//category router
const categoryController=require('../controller/categoryController');
const express=require('express');
const upload=require('../helper/upload');
const  router=express.Router();
const auth=require('../helper/auth');

router.post('/addcategory',auth.verifyToken,upload.single('categoryimage'),categoryController.addCategory);
router.get('/showcategory',auth.verifyToken,categoryController.listAllCategory);
// router.post('/updatecategory/:id',auth.verifyToken,upload.single('categoryimage'),categoryController.updateCategory);
router.post('/updatecategory/:id',auth.verifyToken,upload.single('categoryimage'),categoryController.updateCategory);
router.post('/deletecategory/:ids',auth.verifyToken,categoryController.deleteCategory);
module.exports=router;