import express from "express";
import { orderController } from "../controllers/index.js";

const orderRouter = express.Router();

const { getAllOrders, getOrderById, addOrder, deleteOrder, updateOrder} = orderController;
orderRouter.get("/orders", getAllOrders);
orderRouter.post("/orders", addOrder);
orderRouter.get("/orders/:id", getOrderById);
orderRouter.delete("/orders/:id", deleteOrder);
orderRouter.put("/orders/:id", updateOrder);

export default orderRouter;
