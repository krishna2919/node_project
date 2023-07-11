const {Testimonial}=require('../models/testimonial');
const validate=require('../validation/testimonialValidation');
const express = require('express');
const app=express();
const dbConnect=require('../startup/db');



//add testimonial
module.exports.addTestiomonial=async (req,res) =>{
    console.log(req.body);
    const {error}=validate.addTestimonialValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    let testimonial= await Testimonial.findOne({ testimonialName: req.body.testimonialName});
    if (testimonial) 
    {
        return res.status(400).send(' testimonial already exisits!');
    } 
    else 
    {
        testimonial = new Testimonial({
            testimonialName:req.body.testimonialName,
            designation:req.body.designation,
            discription:req.body.discription,

        });
        if(req.file)
        {
            testimonial.testimonialimage=req.file.path;
        }
        await testimonial.save();
        res.send(testimonial);
    }
}


//view 
module.exports.viewAllTestimonial=async(req,res)=>{
    const viewTestimonial = await Testimonial.find();
    res.send(viewTestimonial);
}



//update  testimonial

module.exports.testimonialupdate=async(req,res)=>{
    
   
    let id = req.params.id;
    console.log(id);

    let testimonial = await Testimonial.findOne({ _id: req.params.id });

    let testimonialName=testimonial.testimonialName;

    if (!testimonial) 
    {
        return res.status(400).send(' Enter valid category.');
    } 
    
    if(testimonial)
    {
        const {error}=validate.addTestimonialValidation(req.body);
        if(error) 
        {
            return res.status(400).send(error.details[0].message);
        }
            const updateData = {
                testimonialName:req.body.testimonialName,
                designation:req.body.designation,
                discription:req.body.discription,
                testimonialimage:req.body.testimonialimage
            };
            
            if(req.file)
            {
                updateData.testimonialimage=req.file.path;
            }

            const testimonialUpdate = await Testimonial.updateOne({testimonialName},updateData);
            if(testimonialUpdate) {
                console.log('data updated successfully');
            }
            res.send("testimonial data updated...");
    }
    else
    {
        res.send("testimonial data  not updated")
    }

}



// delete
module.exports.deleteTestimonial=async(req,res)=>{


    let id = req.params.id;
    console.log(id);


    const user= await Testimonial.deleteMany(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('testimonial data not found');
  }

 else{

  res.status(200).json(" testimonial data delete..");}

}