import express from "express";
import { ingredientController } from "../controllers/index.js";
import { validateAddIngredient, validateUpdateIngredient, validateDeleteIngredient, validateGetIngredientById, validateGetIngredientByName} from '../validators/ingredient.validators.js'
const ingredientRouter = express.Router();

const { addIngredient, updateIngredient, getAllIngredients, getIngredientById, getIngredientByName, deleteIngredient } = ingredientController;
ingredientRouter.get("/ingredients", getAllIngredients);
ingredientRouter.post("/ingredients", validateAddIngredient(),addIngredient);
ingredientRouter.get("/ingredients/name", validateGetIngredientByName(),getIngredientByName);
ingredientRouter.get("/ingredients/:id", validateGetIngredientById(),getIngredientById);
ingredientRouter.delete("/ingredients/:id",validateDeleteIngredient(),deleteIngredient);
ingredientRouter.put("/ingredients/:id", validateUpdateIngredient(),updateIngredient);

export default ingredientRouter;
