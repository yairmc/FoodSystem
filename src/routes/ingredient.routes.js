import express from "express";
import { ingredientController } from "../controllers/index.js";
const ingredientRouter = express.Router();

const { addIngredient, updateIngredient, getAllIngredients, getIngredientById, getIngredientByName, deleteIngredient } = ingredientController;
ingredientRouter.get("/ingredients", getAllIngredients);
ingredientRouter.post("/ingredients", addIngredient);
ingredientRouter.get("/ingredients/name", getIngredientByName);
ingredientRouter.get("/ingredients/:id", getIngredientById);
ingredientRouter.delete("/ingredients/:id", deleteIngredient);
ingredientRouter.put("/ingredients/:id", updateIngredient);

export default ingredientRouter;
