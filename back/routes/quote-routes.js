const { addQuote, getQuotes, submitRating } = require('../controllers/quoteControllers');
const { check,body } = require('express-validator');

express = require('express');
const router = express.Router();

router.post("/addQuote",
[check("quote","my message").exists().isLength({ min: 2 })
,check("name").exists().isLength({ min: 2 }),check("totalRating").exists().isNumeric(),check("count").exists().isNumeric()]
,addQuote);
router.get("/getQuotes",getQuotes);
router.post("/submitRating",
[check("rating").exists().custom((rating)=>{
    if(rating<0 || rating>5){
        throw new Error("inccorect number")
    }
    console.log("here")
    return true;
}),check("id").exists(),check("userID").exists()
]
,submitRating);

module.exports = router