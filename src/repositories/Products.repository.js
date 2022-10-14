import  ProductB  from '../entities/Product.js';
import { Product } from '../models/Product.js';

export class ProductRepository {

    async create (product) {
        const result = await Product.create(product._name, product._basePrice, product._cost, product._availability, product._taxes);      
        
        return new ProductB(result.name, result.basePrice, result.cost, result.availability, result.taxes);
    }

    async update (product) {
        if (product.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await Product.update(product, {
            where: {
                id: product.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await Product.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await Product.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await Product.findAll();
        return result.map(() => {
            new ProductB(result.name, result.basePrice, result.cost, result.availability, result.taxes)
        });
    }
}