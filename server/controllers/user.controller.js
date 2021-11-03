const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

class UserController {
    register(req, res){
        const user = new User(req.body)
        user.save()
            .then(()=>{
                res
                    .cookie("usertoken", jwt.sign({_id:user._id}, secret),{httpOnly:true})
                    .json({msg:"success", user: user})
            })
            .catch(err=>res.json(err))
    }

    login(req, res){
        User.findOne({email:req.body.email})
            .then(user=>{
                if(user===null){
                    res.json({msg: "invalid login attempt - user not found"})
                } else {
                    // console.log(req.body);
                    bcrypt.compare(req.body.password, user.password)
                    .then(passwordIsValid=>{
                        if(passwordIsValid){
                            res.cookie("usertoken", jwt.sign({_id:user._id}, secret), {httpOnly:true})
                            .json({msg:"success!"})
                        } else {
                            res.json({msg: "invalid login attempt - Forgot Password?"})
                        }
                    })
                    .catch(err=>res.json({msg: ".catch SOMETHING WENT WRONG with LOGIN. BCRYPT COMPARISON", err}))
                }
            })
            .catch(err=>res.json(err))
    }

    getLoggedInUser(req, res){
        const decodeJWT = jwt.decode(req.cookies.usertoken, {complete:true});
        User.findById(decodeJWT.payload._id)
            .then(user=>res.json({user}))
            .catch(err=>res.json(err))

    }

    logout(req, res){
        res.cookie("usertoken", jwt.sign({_id:""}, secret), {httpOnly:true, maxAge:0}).json({msg:"ok"})
    }

}

module.exports = new UserController();