const mongoose = require('mongoose')

const maintenanceForm = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    unitNumber: {
        type: String,
        require: true
    },
    serviceType: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    status: {
        type: String,
        default: true,
        require: true
    },

})
const maintenance = mongoose.model("MaintenanceForm", maintenanceForm)

module.exports = maintenance