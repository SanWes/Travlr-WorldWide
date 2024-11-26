const PostController = require("../controllers/post.controller");


module.exports = app =>{
    app.get("/api/travlr/AllPosts", PostController.getAllPosts);
    // Tested API with POSTMAN : Passed 
    
    app.post("/api/travlr/CreatePost", PostController.createNewPost)
    // Tested API with POSTMAN : Passed 
    
    app.get("/api/travlr/OnePost/:id", PostController.findOnePost)
    // Tested API with POSTMAN : Passed 
    
    app.put("/api/travlr/UpdatePost/:id", PostController.updateExistingPost);
    // Tested API with POSTMAN : Passsed - Need all inputs to Update 
    // 

    app.delete("/api/travlr/DeletePost/:id", PostController.deletePost);
    // Tested API with POSTMAN : Passed 

}

