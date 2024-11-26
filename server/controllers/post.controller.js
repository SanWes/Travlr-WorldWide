const PostModel = require("../models/post.model");

class PostController {
    async getAllPosts(req, res) {
        try {
            const allPosts = await PostModel.find();
            res.status(200).json({ results: allPosts });
        } catch (error) {
            res.status(500).json({ error: error.message });
    }
    }

    async createNewPost(req, res) {
        try {
            const newPost = await PostModel.create(req.body);
            res.status(201).json({ results: newPost });
            console.log("Successful Post");
    }   catch (error) {
            res.status(500).json({ error: error.message });
    }
    }

    async findOnePost(req, res) {
    try {
        const foundPost = await PostModel.findOne({ _id: req.params.id });
        res.json({ results: foundPost });
    } catch (error) {
        res.json({ error: error.message });
    }
    }

    async updateExistingPost(req, res) {
    try {
        const updatedPost = await PostModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
        );
        res.json({ results: updatedPost });
    } catch (error) {
        res.json({ error: error.message });
    }
    }

    async deletePost(req, res) {
    try {
        const deletedPost = await PostModel.deleteOne({ _id: req.params.id });
        res.json({ results: deletedPost });
    } catch (error) {
        res.json({ error: error.message });
    }
    }
    // Function to find posts by a specific author
    async findPostsByAuthor(req, res) {
        try {
            const author = req.params.author;
            const posts = await PostModel.find({ author: author });
            res.status(200).json({ results: posts });
        } catch (err) {
            res.status(500).json({ err: err.message });
        }
    }

    // Function to update post content
    async updatePostContent(req, res) {
        try {
            const postId = req.params.id;
            const updatedContent = req.body.content;
            const updatedPost = await PostModel.findOneAndUpdate(
                { _id: postId },
                { content: updatedContent },
                { new: true, runValidators: true }
            );
            res.json({ results: updatedPost });
        } catch (err) {
            res.status(500).json({ err: err.message });
        }
    }

    // Function to delete multiple posts
    async deleteMultiplePosts(req, res) {
        try {
            const postIds = req.body.ids;
            const deletedPosts = await PostModel.deleteMany({ _id: { $in: postIds } });
            res.json({ results: deletedPosts });
        } catch (err) {
            res.status(500).json({ err: err.message });
        }
    }


}

module.exports = new PostController();
