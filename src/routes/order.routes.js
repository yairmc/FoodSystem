import express from "express";
import { orderController } from "../controllers/index.js";
import {validateAddOrder, validateDeleteOrder, validateGetOrderById, validateUpdateOrder} from "../validators/order.validator.js"
const orderRouter = express.Router();

const { getAllOrders, getOrderById, addOrder, deleteOrder, updateOrder} = orderController;
orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", validateAddOrder() , addOrder);
orderRouter.get("/orders/:id",validateGetOrderById(), getOrderById);
orderRouter.delete("/orders/:id",validateDeleteOrder(), deleteOrder);
orderRouter.put("/orders/:id",validateUpdateOrder(), updateOrder);

export default orderRouter;
