import jwt from "jsonwebtoken";
import { config } from "dotenv";
config({ path: ".env" });

export function validateToken(req, res, next) {
    const accessToken = req.headers["authorization"];
    if (!accessToken) res.send("Access denied");

    jwt.verify(accessToken, process.env.SECRETKEY, (err, data) => {
        if (err) res.send("Access denied, token incorrect");
        next();
    });
}
