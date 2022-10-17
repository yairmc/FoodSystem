import express from "express";
import { userController } from "../controllers/index.js";
const userRouter = express.Router();

const { addUser, deleteUser, getAllUsers, getUserById, getUserByUsername, updateUser } = userController;
userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser);
userRouter.get("/users/username", );
userRouter.get("/users/:id", (req, res) => {
    res.json({
        message: "Get user by id"
    })
});
userRouter.delete("/users/:id", (req, res) => {
    res.json({
        message: "Delete user by id"
    })
});
userRouter.put("/users/:id", (req, res) => {
    res.json({
        message: "Update user by id"
    })
});

export default userRouter;