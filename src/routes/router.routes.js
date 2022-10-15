import express from "express";
const RouterApp = express.Router();
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js"

RouterApp.use(userRouter);
RouterApp.use(authRouter);

export default RouterApp;