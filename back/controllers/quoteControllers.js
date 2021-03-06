const { validationResult } = require('express-validator');
const express = require('express');
const bodyParser = require('body-parser');
const Quote = require('../models/quoteSchema');
const app = express();
app.use(bodyParser.json());

const addQuote = async (req,res,next)=>{
    console.log("start");
    console.log(req.body)
    const {name,quote,count,totalRating} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       
        console.log("error",errors)
        return res.json({msg:"error"})
    }
   const allQuotes = await Quote.findOne({quote:quote});
   console.log(allQuotes)
   if(allQuotes){
    return res.json({msg:"the quote is already in the system"})
   }
   const newQuote = new Quote({
       name:name,
       quote:quote,
       totalRating:totalRating,
       count:count
   })
   await newQuote.save();
   const id = newQuote._id.valueOf();
    console.log("add",newQuote);
    return res.json({msg:"ok",id:id})
}

const getQuotes = async(req,res,next)=>{
    const quotes = await Quote.find();
    console.log(quotes);
    res.json({msg:"ok",quotes:quotes})

}
const submitRating = (req,res,next)=>{
    console.log("start");
    console.log(req.body)
    const {rating,userID,id} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       
        console.log("error",errors)
        return res.json({msg:"error"})
    }
    return res.json({msg:"ok"})
}


module.exports = {
    addQuote:addQuote,
    getQuotes:getQuotes,
    submitRating:submitRating
}