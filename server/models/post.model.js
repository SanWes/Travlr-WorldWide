const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [4, "Title must be at least 4 characters"]
    },
    author: {
        type:String,
        required: [true, "Author is required"],
        minlength: [2, "Author must be at least 2 characters"]
    },
    content: {
        type: String,
        required: [true, "Content is required"],
        minlength: [20, " Content must be at least 20 character"]
    },
    tags: {
    type: [String],
    default: "Travel",
    minlength:[1, "Tag for Organizing Content"]
}

}, {timestamps: true}
);


const PostModel = mongoose.model("Post", PostSchema);
// console.log("HEY LOOK HERE FOR CURRENT POST",Post);


module.exports = PostModel;