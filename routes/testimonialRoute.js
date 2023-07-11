const testimonialapi=require('../controller/testimonialapi');
const express=require('express');
const upload=require('../helper/upload');
const  router=express.Router();
const auth=require('../helper/auth');


router.post('/addTestimonial',auth.verifyToken,upload.single('testimonialimage'),testimonialapi.addTestiomonial);
 router.get('/viewTestimonial',auth.verifyToken,testimonialapi.viewAllTestimonial);
router.post('/updateTestimonial/:id',auth.verifyToken,upload.single('testimonialimage'),testimonialapi.testimonialupdate);
 router.delete('/deleteTestimonial/:ids',auth.verifyToken,testimonialapi.deleteTestimonial);
module.exports=router;