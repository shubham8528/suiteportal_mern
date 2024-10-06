const mongoose = require("mongoose")
require('dotenv').config();
const mongooseURL = process.env.DB_URL

mongoose.connect(mongooseURL)

const db = mongoose.connection;
db.on("connected", () => {
    console.log("connected mongodb connection")
})

db.on("error", () => {
    console.log("error mongodb connection")
})

db.on("disconnected", () => {
    console.log("disconnected mongodb connection")
})

module.exports = db