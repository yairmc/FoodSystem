import express from "express";
const RouterApp = express.Router();
import userRouter from "./user.routes.js";
import authRouter from "./auth.routes.js";
import roleRouter from "./role.routes.js";

RouterApp.use(userRouter);
RouterApp.use(authRouter);
RouterApp.use(roleRouter);

export default RouterApp;