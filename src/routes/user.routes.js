import express from "express";
const userRouter = express.Router();

userRouter.get("/users", (req, res) => {
    res.json({
        message: "Get all users"
    })
});
userRouter.post("/users", (req, res) => {
    res.json({
        message: "Create new user (post users)"
    })
});
userRouter.get("/users/username", (req, res) => {
    const { username } = req.query;
    res.json({
        message: "Get user by username"
    })
});
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