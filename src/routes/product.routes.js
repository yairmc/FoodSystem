import express from "express";

const prodRouter = express.Router();

prodRouter.get("/products", (req, res) => {
    res.send("All products");
});
prodRouter.post("/products", (req, res) => {
    res.send("Add new product");
});
prodRouter.put("/products/:id", (req, res) => {
    res.send("Update prod by id")
});
prodRouter.delete("/products/:id", (req, res) => {
    res.send("Delete prod by ID");
});
prodRouter.get("/products/number", (req, res) => {
    res.send("Get prod by number");
});
prodRouter.get("/products/type", (req, res) => {
    res.send("Get prod by type");
});
prodRouter.get("/products/:id", (req, res) => {
    res.send("Get prod by ID");
});
export default prodRouter;