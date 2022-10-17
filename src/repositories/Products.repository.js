import { Product } from '../entities/Product.js';
import { ProductModel } from '../models/Product.model.js';

export class ProductRepository {

    async create (product) {
       const p = new product.toPersistenceObject();
       const result = await ProductModel.create(p);
       return new Product(result.name, result.basePrice, result.cost, result.availability, result.taxes, result.type, result.stock); 
    }

    async update (id, product) {
        if (id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await ProductModel.update({name:product.name, basePrice:product.basePrice, cost:product.cost, availability:product.availability, taxes:product.taxes, type:product.typem, stock:product.stock}, {
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await ProductModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await ProductModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await RoleModel.findAll({
            order: ['id'],
            attributes: ['name', 'basePrice', 'cost', 'availability', 'taxes', 'type', 'stock']
        });
        return JSON.stringify(result);
    }
}