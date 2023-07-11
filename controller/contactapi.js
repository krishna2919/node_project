const {Contact}=require('../models/contactUs');
const validate=require('../validation/contactusValidation');
const express = require('express');
const app=express();
const dbConnect=require('../startup/db');

let date= new Date().toISOString().slice(0, 10)

//add contact
module.exports.addContact=async (req,res) =>{
    console.log(req.body);
    const {error}=validate.addConatctusValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    let contactUs = await Contact.findOne({ email: req.body.email});
    if (contactUs) 
    {
        return res.status(400).send(' this contact already exists!');
    } 
    else 
    {
        contactUs= new Contact({
            name:req.body.name,
            email:req.body.email,
            msg:req.body.msg,
            phonenumber:req.body.phonenumber,
            date:date

        });
      
        await contactUs.save();
        res.send(contactUs);
    }
}

//view contact
module.exports.viewAllContact=async(req,res)=>{
    const viewContact = await Contact.find();
    res.send(viewContact);
}



//contact update

module.exports.contactUpdate=async(req,res)=>{
    
   
    let id = req.params.id;
    console.log(id);

    let contact = await Contact.findOne({ _id: req.params.id });

    let email=contact.email;

    if (!contact) 
    {
        return res.status(400).send(' Enter valid category.');
    } 
    
    if(contact)
    {
        const {error}=validate.addConatctusValidation(req.body);
        if(error) 
        {
            return res.status(400).send(error.details[0].message);
        }
            const updateData = {
            name:req.body.name,
            email:req.body.email,
            msg:req.body.msg,
            phonenumber:req.body.phonenumber,
            date:date
            };
          
            const contactUpdate = await Contact.updateOne({email},updateData);
            if(contactUpdate) {
                console.log('data updated successfully');
            }
            res.send("contact updated...");
    }
    else
    {
        res.send("Contact not updated")
    }

}

// delete contact
module.exports.deleteContact=async(req,res)=>{


    let id = req.params.id;
    console.log(id);


    const user= await Contact.deleteMany(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error(' not found');
  }

 else{

  res.status(200).json(" contact delete" );}

}