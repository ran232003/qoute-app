const { addQuote, getQuotes } = require('../controllers/quoteControllers');
const { check,body } = require('express-validator');

express = require('express');
const router = express.Router();

router.post("/addQuote",
[check("quote","my message").exists().isLength({ min: 2 })
,check("name").exists().isLength({ min: 2 }),check("count").exists().custom((count)=>{
    if(count<0 || count>5){
        throw new Error("inccorect number")
    }
    console.log("here")
    return true;
})]
,addQuote);
router.get("/getQuotes",getQuotes);

module.exports = router