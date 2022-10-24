import express from "express";
const RouterApp = express.Router();
import userRouter from "./user.routes.js";
import roleRouter from "./role.routes.js";
import authRouter from "./auth.routes.js"
import tableRouter from "./table.routes.js";
import ticketRouter from "./ticket.routes.js";
import ingredientRouter from "./ingredient.routes.js"
import prodRouter from "./product.routes.js";

RouterApp.use(userRouter);
RouterApp.use(tableRouter);
RouterApp.use(ticketRouter)
RouterApp.use(authRouter);
RouterApp.use(roleRouter);
RouterApp.use(ingredientRouter);
RouterApp.use(prodRouter);


export default RouterApp;