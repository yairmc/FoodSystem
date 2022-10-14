import express from "express";
const RouterApp = express.Router();
import userRouter from "./user.routes.js";

RouterApp.use(userRouter);

export default RouterApp;