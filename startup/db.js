

const mongoose=require("mongoose");

module.exports=function(){
    
mongoose.connect('mongodb://localhost/user')
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log('could not connect to mongodb..',err))
}




