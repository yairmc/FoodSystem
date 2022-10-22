import express from "express";
import { prodController } from "../controllers/index.js";
import { getProductByType } from "../controllers/prodController.js";
const prodRouter = express.Router();

const { addProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    updateProduct
} = prodController;

prodRouter.get("/products", getAllProducts);
prodRouter.post("/products", addProduct);
prodRouter.put("/products/:id", updateProduct);
prodRouter.delete("/products/:id", deleteProduct);
prodRouter.get("/products/name", getProductByName);
prodRouter.get("/products/type", getProductByType);
prodRouter.get("/products/:id", getProductById);
export default prodRouter;