
const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    try {
        const token = req?.headers?.authorization.split(" ")[1]
        console.log(typeof token)
        if (!token) {
            return res.status(403).send({ message: 'No token provided.' });
        }
        jwt.verify(token, 'secret_key');
        next()
    } catch (err) {
        return res.status(401).send({ message: "invalid token" })
    }
}