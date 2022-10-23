import { Ingredient } from '../entities/Ingredient.js';
import { IngredientModel } from '../models/Ingredient.model.js';

export class IngredientRepository {

    async createIngredient(ingredient) {
        const newIngredient = await IngredientModel.create(ingredient);
        return new Ingredient(newIngredient.name, newIngredient.stock).toPersistenceObject();
    }

    async updateIngredient(id, ingredient) {
        const ingredientUpdated = await IngredientModel.update({ name: ingredient.name, stock: ingredient.stock }, {
            where: {
                id
            }
        });
        return ingredientUpdated;
    }

    async deleteIngredient(id) {
        const ingredientDeleted = await IngredientModel.destroy({
            where: {
                id
            }
        });
        return ingredientDeleted;
    }

    async getIngredientById(id) {
        const ingredient = await IngredientModel.findOne({
            where: {
                id
            }
        });
        return ingredient;
    }

    async getIngredientByName(name) {
        const ingredient = await IngredientModel.findOne({
            where: {
                name
            }
        });
        return ingredient;
    }

    async getAllIngredients() {
        const allIngredients = await IngredientModel.findAll({
            ingredient: ['id'],
            attributes: ['id', 'name', 'stock']
        });
        return allIngredients;
    }
}

