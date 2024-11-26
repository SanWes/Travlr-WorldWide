const UserController = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config")

module.exports = app =>{
    app.post("/api/travlr/register", UserController.register)
    // Creates ability to make Axios calls on front end to this Back End Route which then executes Controller functions to register 
    // axios.post("http://localhost:8000/api/travlr/login", 
    app.post("/api/travlr/login", UserController.login)
    // app.get("/api/login", Users.login)
    
    app.get("/api/travlr/users/loggedin", authenticate, UserController.getLoggedInUser)

    app.get("/api/travlr/users/logout", UserController.logout)
}
