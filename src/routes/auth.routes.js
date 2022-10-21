import express from "express";
import { validateToken } from'../validators/token.validator.js'
import { generateAccessToken } from "../controllers/authController.js";
const authRouter = express.Router();

authRouter.use(express.urlencoded({ extended: true }))
authRouter.use(express.json())

authRouter.get('/auth', validateToken, (req, res) => {
    res.json({
        text: 'you are authorizated'
    })
});

authRouter.post('/auth', (req, res) => {
    const { idUser, userName } = req.body;
    const user = {
        id: idUser,
        username: userName
    };
    const accessToken = generateAccessToken(user);

    res.json({ accessToken })
});




export default authRouter;