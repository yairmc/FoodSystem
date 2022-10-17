import { Ingredient }  from '../entities/Ingredient.js';
import { IngredientModel } from '../models/Ingredients.model.js';

export class IngredientRepository {

    async create (ingredient) {
        const ingredientPO = ingredient.toPersistenceObject();
        const result = await IngredientModel.create(ingredientPO);      
        return new Ingredient(result.name, result.stock);
    }

    async update (id, ingredient) {
        if (id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await IngredientModel.update({name:ingredient.name, stock:ingredient.stock},{
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await IngredientModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await IngredientModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await IngredientModel.findAll({
            ingredient: ['id'],
            attributes: ['name', 'stock']
        });
        return JSON.stringify(result);
    }

    // async findAll() {
    //     const result = await Ingredient.findAll();
    //     return result.map(() => {
    //         new IngredientsB(result.name, result.stock)
    //     });
    // }

}

