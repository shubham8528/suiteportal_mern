require('dotenv').config();

const express = require("express")
var bodyParser = require('body-parser')
var cors = require("cors");
var jsonParser = bodyParser.json()
const app = express()
const PORT = process.env.PORT || 3000
const db = require("./db")
const loginRoutes = require("./routes/login")
const maintenanceRoutes = require("./routes/maintenanceForm")
app.use(cors());
app.use(jsonParser)
app.use("/", loginRoutes)
app.use("/api/maintenance-requests/", maintenanceRoutes)
app.listen(PORT, () => {
    console.log("server running")
})