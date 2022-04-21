const mongoose = require('mongoose');

userSchema = mongoose.Schema({
    userName: {
        type: String,
        trim: true,
        unique: true,
        required:true
    },
    password:{
        type: String,
        trim: true,
        unique: true,
        required:true
    },
    quotes:[]
})

const User = mongoose.model("User",userSchema);

