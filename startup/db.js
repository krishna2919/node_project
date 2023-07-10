const mongoose=require('mongoose');
module.exports=function()
{
    mongoose.connect('mongodb://127.0.0.1:27017/boiler_plate')
    .then(()=>console.log('connected to database...'))
.catch(err=>console.log('error: ',err));

}