const mongoose = require("mongoose")


const signupSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
})

const Signup = mongoose.model("SignUp", signupSchema)
module.exports = Signup