import  PackagingProductB  from '../entities/PackagingProduct.js';
import { PackagingProduct } from '../models/PackagingProduct.js';

export class PackagingProductRepository {

    async create (packagingProduct) {
        const result = await PackagingProduct.create(packagingProduct._name, packagingProduct._stock);      
        
        return new PackagingProductB(result.name, result.stock);
    }

    async update (packagingProduct) {
        if (packagingProduct.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await PackagingProduct.update(packagingProduct, {
            where: {
                id: packagingProduct.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await PackagingProduct.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await PackagingProduct.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await PackagingProduct.findAll();
        return result.map(() => {
            new PackagingProductB(result.name, result.stock)
        });
    }
}