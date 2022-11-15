import { config } from "dotenv";
config({ path: ".env" });
import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
    return jwt.sign(user, process.env.SECRETKEY, { expiresIn: "1d" });
}
