const {Portfolio}=require('../models/portfolio');
const validate=require('../validation/portfolioValidation');
const express = require('express');
const app=express();
const dbConnect=require('../startup/db');

let date= new Date().toISOString().slice(0, 10);


//add portfolio
module.exports.addPortfolio =async (req,res) =>{
    console.log(req.body);
    const {error}=validate.addPortfolioValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    let portfolio = await Portfolio.findOne({ portfolioName: req.body.portfolioName});
    if (portfolio) 
    {
        return res.status(400).send(' this portfolio already exists!');
    } 
    else 
    {
        portfolio= new Portfolio({
          portfolioName:req.body.portfolioName,
          date:date,
          description:req.body.description,
          title:req.body.title,
          category:req.body.category

        });
        if(req.files)
        {
            portfolio.images=req.files
            
        }

        
        await portfolio.save();
        res.send(portfolio);
    }
}


//view 
module.exports.viewAllProtfolio=async(req,res)=>{
    const viewProtfolio = await Portfolio
    .find()
    .populate('category')
    .select('protfolio title description date portfolioName images');
    res.send(viewProtfolio);
}



//protfolio update

module.exports.protfolioupdate=async(req,res)=>{
    
   
    let id = req.params.id;
    console.log(id);

    let protfolio = await Portfolio.findOne({ _id: req.params.id });

    let portfolioName=protfolio.portfolioName;

    if (!protfolio) 
    {
        return res.status(400).send(' Enter valid category.');
    } 
    
    if(protfolio)
    {
        const {error}=validate.addPortfolioValidation(req.body);
        if(error) 
        {
            return res.status(400).send(error.details[0].message);
        }
            const updateData = {
                portfolioName:req.body.portfolioName,
                date:date,
                description:req.body.description,
                title:req.body.title,
                category:req.body.category,
                images:req.body.images
            };
            
            if(req.files)
            {
                updateData.images=req.files;
            }

            const protfolioUpdate = await Portfolio.updateOne({portfolioName},updateData);
            if(protfolioUpdate) {
                console.log('data updated successfully');
            }
            res.send("protfolio updated...");
    }
    else
    {
        res.send("protfolio not updated")
    }

}



//delete
module.exports.deleteprotfolio=async(req,res)=>{


    let id = req.params.id;
    console.log(id);


    const user= await Portfolio.deleteOne(req.params.id);

  if (!user) {
    res.status(400);
    throw new Error('protfolio not found');
  }

 else{

  res.status(200).json("delete..");}

}