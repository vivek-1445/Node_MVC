const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required : true
    },
    mobile:{
        type:Number,
        required : true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    password:{
        type:String,
        required : true
    }
})

const userModel = mongoose.model('userModel',userSchema);


module.exports = userModel;