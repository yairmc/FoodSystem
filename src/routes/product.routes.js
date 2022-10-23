import express from "express";
import { prodController } from "../controllers/index.js";
const prodRouter = express.Router();

import { validateAddNewProduct, validateUpdateProduct, validateDeleteProductById, validateGetProductById, validateGetProductByName, validateGetProductByType } from "../validators/product.validator.js";
const {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    updateProduct,
    getProductByType
} = prodController;

prodRouter.get("/products", getAllProducts);
prodRouter.post("/products", validateAddNewProduct(), addProduct);
prodRouter.put("/products/:id", validateUpdateProduct(), updateProduct);
prodRouter.delete("/products/:id", validateDeleteProductById(), deleteProduct);
prodRouter.get("/products/name", validateGetProductByName(), getProductByName);
prodRouter.get("/products/type", validateGetProductByType(), getProductByType);
prodRouter.get("/products/:id", validateGetProductById(), getProductById);
export default prodRouter;