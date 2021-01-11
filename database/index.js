const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://hussein:1322013@story.wul1n.mongodb.net/story?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connected");
    } catch (error) {
        throw error;
    }
    
};

module.exports = connect;