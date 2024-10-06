const mongoose = require("mongoose")


const loginSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    }
})

const Login = mongoose.model("Login", loginSchema)
module.exports = Login