import express from "express";
const RouterApp = express.Router();
import userRouter from "./user.routes.js";
import roleRouter from "./role.routes.js";
import authRouter from "./auth.routes.js"
import tableRouter from "./table.routes.js";
import ticketRouter from "./ticket.routes.js";
import ingredientRouter from "./ingredient.routes.js"
import prodRouter from "./product.routes.js";
import orderRouter from "./order.routes.js"
import branchRouter from "./branch.routes.js"; 
//Middlewares
import {validateUrlRequest} from "../validators/token.validator.js";

//RouterApp.use(validateUrlRequest);
RouterApp.use(authRouter)
RouterApp.use(userRouter);
RouterApp.use(tableRouter);
RouterApp.use(ticketRouter)
RouterApp.use(roleRouter);
RouterApp.use(ingredientRouter);
RouterApp.use(prodRouter);
RouterApp.use(orderRouter)
RouterApp.use(branchRouter);


export default RouterApp;