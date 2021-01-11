const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    postCont: {
        type: String,
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model("post", postSchema);
