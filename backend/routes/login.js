const express = require("express")
const jwt = require('jsonwebtoken');
const Signup = require("../model/signup");
const bcrypt = require('bcrypt');
const router = express.Router()


router.post("/api/admin/login", async (req, res) => {
    const { userName, Password } = req.body
    try {
        const admin = await Signup.findOne({ userName });
        // console.log(admin)
        if (!admin) return res.status(401).send({ error: 'Invalid credentials' });
        const validPassword = await bcrypt.compare(Password, admin.Password);
        console.log(validPassword)
        if (!validPassword) return res.status(401).send({ error: 'Invalid credentials' });
        const token = jwt.sign({ id: admin._id }, 'secret_key');
        res.status(200).send({ token: token, status: 200 })
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
})




router.post("/api/admin/signin", async (req, res) => {
    const { userName, Password } = req.body
    const saltRounds = 10;
    try {
        const hashedPassword = await bcrypt.hash(Password.toString(), saltRounds);
        const request = new Signup({ userName, Password: hashedPassword })
        request.save()
        res.status(200).send({ message: "user created sucessfully!", status: 200 })
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
})

module.exports = router;