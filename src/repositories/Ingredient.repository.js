import  IngredientsB  from '../entities/Ingredient.js';
import { Ingredient } from '../models/Ingredients';

export class IngredientRepository {

    async create (ingredient) {
        const result = await Ingredient.create(ingredient._name, ingredient._stock);      
        
        return new IngredientsB(result.name, result.stock);
    }

    async update (ingredient) {
        if (ingredient.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await Ingredient.update(ingredient, {
            where: {
                id: ingredient.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await Ingredient.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await Ingredient.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await Ingredient.findAll();
        return result.map(() => {
            new IngredientsB(result.name, result.stock)
        });
    }

}

