const express = require("express");
const postRoute = express.Router();
const post = require("../database/post");


//this is a test 
postRoute.get("/test", (req, res) => {
    res.send("Checking!!!");
});
//*************************************/

postRoute.post("/post", async (req, res) => {
    let { postCont } = req.body;
    try {
        let check = await post.findOne({ postCont });
        if (check) return res.send("Already exists");
        let posted = await post.create({ postCont });
        if (posted) return res.send({ status: true, message: "post created =D" });

    } catch (error) {
        throw error;
    }
    
});

postRoute.get("/", async (req, res) => {
    try {
        let posts = await post.find({});
        res.send({ status: true, message: posts });

    } catch (error) {
        res.send(`Error -#----> ${error}`);

    }
});

module.exports = postRoute;