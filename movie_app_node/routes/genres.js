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

router.delete('/:id', async (req,res) => {
      Genre.findOneAndDelete({_id : req.params.id}, function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Deleted Genre : ", docs);
            res.json(docs) 
        }
    });
})

router.get('/:id', function(req, res){
    Genre.findById(req.params.id, function(err, data){
        if(err){console.log(err)}
        else{res.json(data)};
    });
});

router.put('/:id/:genre', function(req, res){
    var setField = {
       genre: req.params.genre
    }
    Genre.findOneAndUpdate({"_id":req.params.id}, setField, {upsert:true}, function(err, results){
       if(err){console.log(err)}
       else{
           console.log(setField);
           res.json(results)
       }
    })
})

module.exports = router;