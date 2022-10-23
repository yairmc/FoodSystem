import  { ProductIngredient }  from '../entities/ProductIngredient.js';
import { ProductIngredientModel } from '../models/ProductIngredient.model.js';

export class ProductIngredienttRepository {

    async createProductIngredient(productIngredient) {
        const newProductIngredient = await ProductIngredientModel.create(productIngredient);     
        return new ProductIngredient(newProductIngredient.quantity, newProductIngredient.ingredientId, newProductIngredient.productId);
    }

    async updateProductIngredient(id, productIngredient) {
        const productIngredientUpdated = await ProductIngredientModel.update({quantity: productIngredient.quantity, ingredientId: productIngredient.ingredientId , productId: productIngredient.productId },{
            where: {
                id
            }
        });
        return productIngredientUpdated;
    }

    async deleteProductIngredient(id) {
        const productIngredientDeleted = await ProductIngredientModel.destroy({
            where: {
                id
            }
        });
        return productIngredientDeleted;
    }

    async findProductIngredientById(id) {
        const productIngredient = await ProductIngredientModel.findOne({
            where: {
                id
            }
        });
        return productIngredient;
    }

    async findAll() {
        const productIngredients = await ProductIngredientModel.findAll({
            order: ['id'],
            attributes: ['quantity', 'ingredientId', 'productId']
        });
        return productIngredients;
    }
}