import jwt from 'jsonwebtoken'
import config from "../../config.js"

export function validateToken(req, res, next) {
    const accessToken = req.headers['authorization']
    if (!accessToken) res.send('Access denied')

    jwt.verify(accessToken, config.secretKey, (err, data) => {
        if (err) res.send("Access denied, token incorrect")
        next();
    })
}