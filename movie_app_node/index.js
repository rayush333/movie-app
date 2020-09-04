const express = require("express");
const router = express.Router();

const movies = require("./routes/movies");
const users = require("./routes/users");

const app = express();

app.use(express.json())

app.use("/api/movies", movies);
app.use("/api/users", users);




app.listen(4000, () => { console.log("listening port 4002") });


