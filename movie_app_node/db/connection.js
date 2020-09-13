const mongoose = require('mongoose');
const URI = "mongodb+srv://movieAppUser:movieAppUser@cluster0.snf73.mongodb.net/Movie-App-Clone?retryWrites=true&w=majority";
const Genre = require("./schema/genre");
const Movie = require("./schema/movie");
const User = require("./schema/user");

const connectDB =  mongoose.connect(URI, { useNewUrlParser : true}, 
        (error)=>{
            if (!error) {
                console.log("Connected to DB")
            } else {
                console.log("Error connecting to DB")
            }
    });

module.exports = connectDB;

//Alternative using MongoClient
/* const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://movieAppUser:movieAppUser@cluster0.snf73.mongodb.net/Movie-App-Clone?retryWrites=true&w=majority";
const connectDB = new MongoClient(uri, { useNewUrlParser: true });
connectDB.connect(err => {
    if (!err) {
        console.log("connected to db");
    }
  //const collection = client.db("test").collection("devices");
  
  // perform actions on the collection object
  connectDB.close();
}); */