const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
    name:String,
    quote:String
})

const Quote = mongoose.model("Quote",quoteSchema);
module.exports = Quote;