const portfolioapi=require('../controller/portfolioapi');
const express=require('express');
const upload=require('../helper/upload');
const  router=express.Router();
const auth=require('../helper/auth');

router.post('/addportfolio',auth.verifyToken,upload.array('images',4),portfolioapi.addPortfolio);
 router.get('/viewportfolio',auth.verifyToken,portfolioapi.viewAllProtfolio);
router.post('/updateportfolio/:id',auth.verifyToken,upload.array('images'),portfolioapi.protfolioupdate);
 router.delete('/deleteportfolio/:ids',auth.verifyToken,portfolioapi.deleteprotfolio);
module.exports=router;