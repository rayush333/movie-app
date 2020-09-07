const mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : "Required"
    },
    userEmailId : {
        type : String,
        required : "Required"
    },
    userPassword : {
        type : String,
        required : "Required"
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;