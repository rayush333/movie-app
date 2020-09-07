const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))

//connecting to db
const connectDB = require('./db/connection')
connectDB;

const genres = require("./routes/genres");
const movies = require("./routes/movies");
const users = require("./routes/users");

//Please add Access-Control-Allow-Origin extension in your browser
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(express.json())
app.use("/api/genres", genres);
app.use("/api/movies", movies);
app.use("/api/users", users);

app.listen(4000, () => { console.log("listening port 4000") });