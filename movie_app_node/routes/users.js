const express = require('express')
const router = express.Router();
const bcrypt = require("bcrypt");
const _ = require('lodash')
const { User, validate }= require("../db/schema/user");


router.get("/", exports.getUsers = (req,res)=>{
    User.find()
    .then((docs)=>{
        return res.status(200).json(docs);
    })
    .catch((error)=> res.status(500).json(error));
})

router.get('/:name', exports.getUsers = (req,res)=>{
    User.find({name:req.params.name})
    .then((userFound)=>{
        return res.status(200).json(userFound);
    })
    .catch((error)=> res.status(500).json(error));
})

router.post('/watchlist', async (req,res)=>{
console.log(req.body.name)
console.log(req.body.movieId)

User.find({"name": req.body.name})
.then((userFound)=>{
    console.log(userFound)
    console.log(userFound[0].get('watchlist').length)
    console.log(userFound[0].get('watchlist'))
    if(userFound[0].get('watchlist') == "") {
    console.log(userFound[0].get('watchlist'))
    console.log(userFound[0].get('name'))
    console.log("Inside $set")

    User.updateOne(
            { "name": req.body.name},
            { $set: { "watchlist": [req.body.movieId]}})
        .then((userFound)=>{
            return res.status(200).json(userFound);
        })
        .catch((error)=> res.status(500).json(error));
    }
    else {
    console.log("Inside $addToSet")
        User.updateOne(
            { "name": req.body.name},
            { $addToSet: { "watchlist": [req.body.movieId]}})
        .then((userFound)=>{
            return res.status(200).json(userFound);
        })
    .catch((error)=> res.status(500).json(error));
        }
}).catch((error)=> res.status(500).json(error));
})

router.post("/", async (req,res)=>{

    const { error } = validate(req.body);
    if (error) { return res.status(400).send(error); }
    let user = await User.findOne({email:req.body.email});
    console.log("user:-",user);
    if(user) {
        return res.status(400).json({msg:"User already exist"});
    }
    user = new User(_.pick(req.body,["name","email","password","role"]));
    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        user = await user.save();
        console.log("User : ", user);
        const token = user.generateAuthToken();
        return res.header("x-auth-token",token).status(200).json(_.pick(req.body,["name","email"]));
    } catch (ex) {
        console.log("Error while saving document User: ", ex.message);
        return res.json(ex.message)
    }
})

router.delete('/:id', async (req) => {
    User.findOneAndDelete({_id : req.params.id}, function (err, docs) { 
      if (err){ 
          console.log(err) 
      } 
      else{ 
          console.log("Deleted User : ", docs); 
      } 
  });
 })
module.exports = router;