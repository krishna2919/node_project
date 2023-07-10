const registrationRoute=require('../routes/registrationRoute');
const categoryRoute=require('../routes/categoryRoute');

const express=require('express');

module.exports=function (app)
{

    app.use(express.json());

    app.use('/api/registration',registrationRoute);
    
    app.use('/api/category',categoryRoute);
    

}