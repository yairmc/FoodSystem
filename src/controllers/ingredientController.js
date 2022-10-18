import { IngredientRepository } from "../repositories/Ingredient.repository.js";
const ingRepo = new IngredientRepository();

const addIngredient = async (req, res) => {
    try {
        const ingredientAux = await ingRepo.create(req.body)
        res.status(200).json(ingredientAux);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error while adding ingredient" });
    }
};

const getAllIngredients = async (req, res) => {
    try {
        const users = await ingRepo.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all ingredients" });
    }
};

const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredient = await ingRepo.findOneById(id);
        if (!ingredient) return res.status(404).json({ msg: "This ingredient doesn't exist" });
        res.status(200).json(ingredient);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying ingredient" });
    }
};

const getIngredientByName = async (req, res) => {
    try {
        const { name } = req.query;
        const ingredient = await ingRepo.findOneByName({
            where: { name: name }
        });
        if (!ingredient) return res.status(404).json({ msg: "This ingredient doesn't exist" });
        res.status(200).json(ingredient);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying user by username" });
    }
};

const updateIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const ingredientAux = await ingRepo.update(id, req.body);
        if (ingredientAux[0] === 0) {
            return res.status(404).json({ msg: "This ingredient wasn't updated" });
        }
        res.status(200).json({ msg: "ingredient updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating ingredient" });
    }
};

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteIng= await ingRepo.delete(id);
        if (!deleteIng) {
            return res.status(404).json({ msg: "This ingredient wasn't deleted" });
        }
        res.status(200).json({ msg: "Ingredient deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting ingredient" });
    }
};


export { addIngredient, updateIngredient, getAllIngredients, getIngredientById, getIngredientByName, deleteIngredient };