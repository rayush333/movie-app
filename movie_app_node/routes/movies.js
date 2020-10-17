const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Movie = mongoose.model("Movie")


router.get("/count=:count&start=:start", (req,res)=>{
    Movie.find().limit(Number(req.params.count)).skip(Number(req.params.start))
    .then((docs)=>{
        return res.status(200).json(docs);
    })
    .catch((error)=> res.status(500).json(error));
})

router.get("/watchlist/:watchlist", (req,res)=>{
let watchlist = req.params.watchlist.split(',')
Movie.find({_id : {$in : watchlist}})
    .then((moviesFound)=>{
        return res.status(200).json(moviesFound);
    })
    .catch((error)=> res.status(500).json(error));
})

router.get("/", (req,res)=>{
    Movie.find()
        .then((docs)=>{
            return res.status(200).json(docs);
        })
        .catch((error)=> res.status(500).json(error));
})

router.get("/:genre", (req,res)=>{
    Movie.find({movieGenre:req.params.genre})
        .then((docs)=>{
            return res.status(200).json(docs);
        })
        .catch((error)=> res.status(500).json(error));
})

router.post("/add", (req,res)=>{
    var movieSchema = new Movie();
    movieSchema.movieTitle = req.body.movieTitle;
    movieSchema.movieGenre = req.body.movieGenre;
    movieSchema.movieDuration = req.body.movieDuration;
    movieSchema.movieRating = req.body.movieRating;
    movieSchema.movieDescription = req.body.movieDescription;
    movieSchema.movieImage = req.body.movieImage;
    movieSchema.movieTrailerUrl = req.body.movieTrailerUrl;
    movieSchema.save((err, doc)=>{
        if(!err) {
            console.log(doc);
            res.status(201).json({ message: "Movie added successfully" })
        } else {
            res.status(500).json({ message: "Error adding Movie"})
        }
    })
})

router.delete('/:id', async (req) => {
    Movie.findOneAndDelete({_id : req.params.id}, function (err, docs) { 
      if (err){ 
          console.log(err) 
      } 
      else{ 
          console.log("Deleted Movie : ", docs); 
      } 
  });
 })
module.exports = router;