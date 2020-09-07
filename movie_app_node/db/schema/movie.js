const mongoose = require('mongoose')
var movieSchema = new mongoose.Schema({
    movieTitle : {
        type : String,
        required : "Required"
    },
    movieGenre : {
        type : String,
        required : "Required"
    },
    movieDuration : {
        type : String,
        required : "Required"
    },
    movieRating : {
        type : String,
        required : "Required"
    },
    movieDescription : {
        type : String,
        required : "Required"
    },
    movieImage : {
        type : String,
        required : "Required"
    },
    movieTrailerUrl : {
        type : String,
        required : "Required"
    }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;