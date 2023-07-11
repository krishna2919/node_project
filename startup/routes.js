const registrationRoute=require('../routes/registrationRoute');
const categoryRoute=require('../routes/categoryRoute');
const contactusRoute=require('../routes/contactusRoutes');
const testimonialRoute=require('../routes/testimonialRoute');
const portfolioRoute=require('../routes/portfolioRoute');

const express=require('express');

module.exports=function (app)
{

    app.use(express.json());

    app.use('/api/registration',registrationRoute);
    
    app.use('/api/category',categoryRoute);
    
    app.use('/api/contact',contactusRoute);

    app.use('/api/testimonial',testimonialRoute);

    app.use('/api/portfolio',portfolioRoute);
}