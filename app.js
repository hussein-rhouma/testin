const express = require("express");
const app = express();
require("dotenv").config();
const PORT = 2000;
const bodyParser = require("body-parser");
const postRoute = require("./routes/post");
const db = require("./database/index");

db();
//const cors = require("cors");
//app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send('Now we are starting!')
});
app.use("/postRoute", postRoute);
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});