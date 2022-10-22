import { IngredientRepository } from "../repositories/Ingredient.repository.js";
const ingredientRepository = new IngredientRepository();

const addIngredient = async (req, res) => {
    try {
        const newIngredient = await ingredientRepository.createIngredient(req.body)
        res.status(200).json(newIngredient);
    } catch (error) {
        res.status(500).json({ msg: "Error while adding ingredient" });
    }
};

const getAllIngredients = async (req, res) => {
    try {
        const allIngredients = await ingredientRepository.getAllIngredients();
        res.status(200).json(allIngredients);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all ingredients" });
    }
};

const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredient = await ingredientRepository.getIngredientById(id);
        if (!ingredient) return res.status(404).json({ msg: "This ingredient doesn't exist" });
        res.status(200).json(ingredient);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying ingredient" });
    }
};

const getIngredientByName = async (req, res) => {
    try {
        const { name } = req.query;
        const ingredient = await ingredientRepository.getIngredientByName(name);
        if (!ingredient) return res.status(404).json({ msg: "This ingredient doesn't exist" });
        res.status(200).json(ingredient);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying ingredient by name" });
    }
};

const updateIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredientAux = await ingredientRepository.updateIngredient(id, req.body);
        if (ingredientAux[0] === 0) {
            return res.status(404).json({ msg: "This ingredient wasn't updated" });
        }
        res.status(200).json({ msg: "Ingredient updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating ingredient" });
    }
};

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredientDeleted = await ingredientRepository.deleteIngredient(id);
        if (!ingredientDeleted) {
            return res.status(404).json({ msg: "This ingredient wasn't deleted" });
        }
        res.status(200).json({ msg: "Ingredient deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting ingredient" });
    }
};


export { addIngredient, updateIngredient, getAllIngredients, getIngredientById, getIngredientByName, deleteIngredient };
