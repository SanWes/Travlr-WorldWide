const Users = require("../controllers/user.controller");

const {authenticate} = require("../config/jwt.config")

module.exports = app =>{
    app.post("/api/travlr/register", Users.register)
    app.post("/api/travlr/login", Users.login)
    // app.get("/api/login", Users.login)
    
    app.get("/api/travlr/users/loggedin", authenticate, Users.getLoggedInUser)

    app.get("/api/travlr/users/logout", Users.logout)
}
