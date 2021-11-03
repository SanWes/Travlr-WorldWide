const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, "User name is required"],
      minlength: [3, "User name must be at least 3 characters"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      }
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    }
  }, {timestamps: true});


// use 'VIRTUAL' -->
//imaginary field that will not be sent to database. only used to compare the two
  UserSchema.virtual("confirmPassword")
    .get( function() {
      return this._confirmPassword})
    .set( function(value) {
        this._confirmPassword = value
    })

    // DO NOT use arrow function in the following callback function as it throws the correct scope of 'this.'
    UserSchema.pre("validate", function(next) {
        if (this.password !== this.confirmPassword){
            this.invalidate("confirmPassword", "Passwords must match")
        }
        //next = performe next step if validation is met
        next();
    } );

    //time to encrypt password before saving user
    UserSchema.pre("save", function(next){
        bcrypt.hash(this.password, 10)
        // 10 = the amount of 'salt' rounds / randomizer. that will occur to the pw before save
        .then(hash=>{
            //success, save users pw as the hashed version into db
            this.password = hash
            next()
        })
        .catch(err=>{console.log("HASHING PW ERROR", err)
        next()
        })

    })


    const User = mongoose.model("User", UserSchema)

    module.exports = User;