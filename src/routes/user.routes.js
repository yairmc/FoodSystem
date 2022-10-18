import express from "express";
import { userController } from "../controllers/index.js";
const userRouter = express.Router();
import {
    validateAddNewUser,
    validateGetUserByUsername,
    validateGetUserById,
    validateDeleteUserById,
    validateUpdateUserById
} from "../validators/user.validator.js";
const {
    addUser,
    deleteUser,
    getAllUsers,
    getUserById,
    getUserByUsername,
    updateUser,
} = userController;
userRouter.get("/users", getAllUsers);
userRouter.post("/users", validateAddNewUser(), addUser);
userRouter.get("/users/username", validateGetUserByUsername(), getUserByUsername);
userRouter.get("/users/:id", validateGetUserById(), getUserById);
userRouter.delete("/users/:id", validateDeleteUserById(), deleteUser);
userRouter.put("/users/:id", validateUpdateUserById(), updateUser);

export default userRouter;
