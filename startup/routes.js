const registration=require('../routes/registration');
const category=require('../routes/category');

const express=require('express');

module.exports=function (app)
{

    app.use(express.json());

    app.use('/api/registration',registration);
    
    app.use('/api/category',category);
    

}