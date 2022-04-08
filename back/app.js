const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json())
mongoose.connect
('mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/quoteApp?retryWrites=true&w=majority');

const quoteRouter = require("./routes/quote-routes");

const test = async ()=>{
    candidateSchema = mongoose.Schema({
        name:String,
        title:String 
    })
   
    const Candidate = mongoose.model("Candidate",candidateSchema);
    const test = new Candidate({
        name:"t",
        title:"a"
    })
   await test.save();
}

app.use("/api/quote",quoteRouter);

app.use(function(error,req,res,next){
  //console.log(error);
  console.log("error controller",error.message);
  const  errorCode = error.code || 500
  const errorMsg = error.message || "unknown error occurd";
  res.status(errorCode)
  res.json({msg:errorMsg});

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

