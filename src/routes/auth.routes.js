import express from "express";
const authRouter = express.Router();

authRouter.use(express.urlencoded({ extended: true }))
authRouter.use(express.json())

authRouter.get('/auth', (req, res) => {
})

authRouter.post('/auth', (req, res) => {

});

export default authRouter;