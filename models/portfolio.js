const mongoose=require('mongoose');
const Joi=require('joi');
const { Category } = require('./category');

const portfolioSchema=new mongoose.Schema({
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    },
    images:{
        type:Array,
        filename: String,
        contentType: String,
        data: Buffer
    },
    portfolioName:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
const Portfolio=mongoose.model('portfolio',portfolioSchema);


exports.Portfolio=Portfolio;
exports.portfolioSchema=portfolioSchema;