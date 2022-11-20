import express from "express";
import { validateToken } from "../validators/token.validator.js";
import { generateAccessToken } from "../controllers/authController.js";
import UserRepository from "../repositories/Users.repository.js";
const userRepo = new UserRepository();
const authRouter = express.Router();
import { compare } from "bcrypt";

authRouter.get("/auth", validateToken, (req, res) => {
    res.json({ text: "you are authorizated" });
});

authRouter.post("/auth", async (req, res) => {
    const { userName, password } = req.body;

    try {
        const { dataValues: userFound } = await userRepo.getUserByUsername(userName);
        if (!userFound) return res.status(403).json({ msg: "Invalid credentials" });
        const isValidUser = await compare(password, userFound.password);
        if (!isValidUser) return res.status(403).json({ msg: "Invalid credentials" });

        const user = {
            id: userFound.id,
            userName: userFound.userName,
            roleId: userFound.roleId,
        };

        const accessToken = generateAccessToken(user);
        res.json({ token: accessToken });
    } catch (error) {
        res.status(500).json({ msg: "Invalid credentials, error" });
    }
});


export default authRouter;
