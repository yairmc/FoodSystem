import express from "express";
import { userController } from "../controllers/index.js";
const userRouter = express.Router();

const { addUser, deleteUser, getAllUsers, getUserById, getUserByUsername, updateUser } = userController;
userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser);
userRouter.get("/users/username", getUserByUsername);
userRouter.get("/users/:id", getUserById);
userRouter.delete("/users/:id", deleteUser);
userRouter.put("/users/:id", updateUser);

export default userRouter;