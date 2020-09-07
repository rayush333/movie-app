const mongoose = require('mongoose')
var genreSchema = new mongoose.Schema({
    genre : {
        type : String,
        required : "Required"
    }
});

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;