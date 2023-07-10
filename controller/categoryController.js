const validate=require('../validation/categoryValidation');
const {Category}=require('../models/category_model');

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
module.exports.listAllCategory=async(req,res)=>{
    const showCategory = await Category.find();
    res.send(showCategory);
}

module.exports.updateCategory=async(req,res)=>{
    
   
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

module.exports.deleteCategory=async(req,res)=>{
    console.log('delete');
}