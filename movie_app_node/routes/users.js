const express = require('express')
const router = express.Router();
const bcrypt = require("bcrypt");
const _ = require('lodash')
const { User, validate }= require("../db/schema/user");
const { unsubscribe } = require('./genres');


router.get("/", exports.getGenres = (req,res)=>{
    User.find()
    .then((docs)=>{
        return res.status(200).json(docs);
    })
    .catch((error)=> res.status(500).json(error));
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
module.exports = router;