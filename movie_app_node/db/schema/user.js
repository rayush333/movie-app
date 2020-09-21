const mongoose = require('mongoose')
const joi = require("joi");
const jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
    },
    password : {
        type : String,
        required: true,
    }
});

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id:this._id}, "secret123");
    return token;
}

function validateUser(user) {
    console.log("validate",user)
    const schema = {
        "name": joi.string().min(5).required(),
        "email": joi.string().min(5).max(255).required(),
        "password": joi.string().min(5).max(15).required(),
    };
    const result = joi.validate(user,schema);
    return result;
}

const user = mongoose.model("User", userSchema);

exports.User = user;
exports.validate = validateUser;
