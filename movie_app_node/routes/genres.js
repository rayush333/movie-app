const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();
const Genre = mongoose.model("Genre")


router.get("/", exports.getGenres = (req,res)=>{
    Genre.find()
    .then((docs)=>{
        return res.status(200).json(docs);
    })
    .catch((error)=> res.status(500).json(error));
})

router.post("/add", (req,res)=>{
    var genreSchema = new Genre();
    genreSchema.genre = req.body.genre;
    genreSchema.save((err, doc)=>{
        if(!err) {
            console.log(doc);
            res.status(201).json({ message: "Genre added successfuly" })
        } else {
            res.status(500).json({ message: "Error adding Genre"})
        }
    })
})

router.delete('/:id', async (req) => {
      Genre.findOneAndDelete({_id : req.params.id}, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Deleted Genre : ", docs); 
        } 
    });
   })
module.exports = router;