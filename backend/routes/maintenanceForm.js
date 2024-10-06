const express = require("express");
const maintenance = require("../model/maintenanceForm");
const checkAuth = require("../middleware/checkAuth")
const router = express.Router()

router.post("/", async (req, res) => {
    const { name, email, unitNumber, serviceType, summary, details } = req.body;
    try {
        const findEmail = await maintenance.find({ email: email })
        if (findEmail.length === 0) {
            const request = new maintenance({ name, email, unitNumber, serviceType, summary, details });
            await request.save()
            res.status(200).send({
                message: 'Request created successfully!',
                status: 200
            })
        } else {
            res.status(401).send({
                message: 'User Allready Exist!',
                status: 401
            })
        }
        console.log(findEmail, email)
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.get("/", checkAuth, async (req, res) => {
    try {
        const request = await maintenance.find()
        res.status(200).send({ status: 200, data: request })
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})

router.put("/:id/close", checkAuth, async (req, res) => {
    const { id } = req.params;
    try {
        const request = await maintenance.findById(id)
        request.status = false
        await request.save()
        res.status(200).send({ status: 200, data: request })
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
})



module.exports = router