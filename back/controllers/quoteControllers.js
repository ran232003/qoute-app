const { validationResult } = require('express-validator');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const addQuote = (req,res,next)=>{
    console.log("start");
    console.log(req.body)
    const {name,id,quote} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       
        console.log("error")
        return res.json({msg:"error"})
    }
   
    console.log("add");
    return res.json({msg:"ok"})
}



module.exports = {
    addQuote:addQuote
}