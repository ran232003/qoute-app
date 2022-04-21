const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    name:String,
    quote:String,
    totalRating:Number,
    count:Number
    
})

const Quote = mongoose.model("Quote",quoteSchema);
module.exports = Quote;