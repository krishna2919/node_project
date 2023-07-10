const validate=require('../validation/categoryValidation');
const {Category}=require('../models/category');
const express = require('express');
const app=express();
const dbConnect=require('../startup/db');



//add category
module.exports.addCategory=async (req,res) =>{
    console.log(req.body);
    const {error}=validate.addCategoryValidation(req.body);
    if(error) 
    {
        return res.status(400).send(error.details[0].message);
    }
    let category = await Category.findOne({ categoryname: req.body.categoryname });
    if (category) 
    {
        return res.status(400).send(' category already exisits!');
    } 
    else 
    {
        category = new Category({
            categoryname:req.body.categoryname,
        });
        if(req.file)
        {
            category.categoryimage=req.file.path;
        }
        await category.save();
        res.send(category);
    }
}



//view category
module.exports.viewAllCategory=async(req,res)=>{
    const viewCategory = await Category.find();
    res.send(viewCategory);
}


//category update

module.exports.update=async(req,res)=>{
    
   
    let id = req.params.id;

    let category = await Category.findOne({ _id: req.params.id });

    let categoryname=category.categoryname;

    if (!category) 
    {
        return res.status(400).send(' Enter valid category.');
    } 
    
    if(category)
    {
        const {error}=validate.addCategoryValidation(req.body);
        if(error) 
        {
            return res.status(400).send(error.details[0].message);
        }
            const updateData = {
            categoryname:req.body.categoryname,
            categoryimage:req.file.filename,
            };
            
            if(req.file)
            {
                updateData.categoryimage=req.file.path;
            }

            const categoryUpdate = await Category.updateOne({categoryname},updateData);
            if(categoryUpdate) {
                console.log('data updated successfully');
            }
            res.send("category updated...");
    }
    else
    {
        res.send("Category not updated")
    }

}



//category delete
module.exports.deleteCategory=async(req,res)=>{


    let id = req.params.id;
    console.log(id);

//   try {
//     await client.connect();    
//     const db = client.db(dbName);
//         const collection = db.collection('categories');

//         // Delete multiple records
//         const result = await collection.deleteMany({_id:req.params.id});
    
//         console.log(`${result.deletedCount} records deleted successfully`);
//       } catch (error) {
//         console.error('Error deleting multiple records:', error);
//       } 
}