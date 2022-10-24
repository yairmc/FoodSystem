import { ProductIngredienttRepository } from "../repositories/ProductIngredient.model.js";
import { IngredientRepository } from "../repositories/Ingredient.repository.js";
const productIngredientRepository = new ProductIngredienttRepository();
const ingredientRepository = new IngredientRepository();

const addProductIngredients = async (req, res) => {
    try {
        const { ingredients } = req.body;
        const { idProduct } = req;
        ingredients.forEach(async (ingredientInfo) => {
            const { ingredientId, quantity } = ingredientInfo;
            const ingredient = await ingredientRepository.getIngredientById(ingredientId);
            if (!ingredient) return res.status(404).json({ msg: "Ingredient doesn't exist" });
            await productIngredientRepository.createProductIngredient({
                quantity,
                ingredientId,
                productId: idProduct,
            });
        });

        res.status(200).json({msg: "Product added"});
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error while adding product" });
    }
};

const updateIngredients = async (req, res) => {
    try {
        const { ingredientsInfo } = req;
        ingredientsInfo.forEach(async (ingredientAux) => {
            const { ingredient, quantity } = await ingredientAux;
            ingredient.stock = ingredient.stock - quantity;
            await ingredientRepository.updateIngredient(ingredient.id, ingredient);
        });
        res.status(200).json({msg: "Product added"});
    } catch (error) {
        res.status(500).json({msg: "Error while updating ingredients"});
    }
};

export { addProductIngredients, updateIngredients };
