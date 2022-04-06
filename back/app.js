const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect
('mongodb+srv://ranfa:232003@cluster0.d2yn9.mongodb.net/quoteApp?retryWrites=true&w=majority');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

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
test();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})