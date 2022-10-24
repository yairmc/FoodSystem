import express from "express";
const branchRouter = express.Router();
branchRouter.get("/branches", (req, res) => {
    res.status(200).json("All branches");
});
branchRouter.post("/branches", (req, res) => {
    res.status(200).json("Add branch");
});
branchRouter.put("/branches/:id", (req, res) => {
    res.status(200).json("Update branch");
});
branchRouter.delete("/branches/:id", (req, res) => {
    res.status(200).json("Delete branch");
});
branchRouter.get("/branches/name", (req, res) => {
    res.status(200).json("Get branch by name");
});
branchRouter.get("/branches/:id", (req, res) => {
    res.status(200).json("Get branch by id");
});

export default branchRouter;