import  PreparedProductB  from '../entities/PreparedProduct.js';
import { PreparedProduct } from '../models/PreparedProduct';

export class PreparedProductRepository {

    async create (preparedProduct) {
        const result = await PreparedProduct.create(preparedProduct._name, preparedProduct._stock);      
        
        return new PreparedProductB(result.name, result.stock);
    }

    async update (preparedProduct) {
        if (preparedProduct.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await PreparedProduct.update(preparedProduct, {
            where: {
                id: preparedProduct.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await PreparedProduct.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await PreparedProduct.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await PreparedProduct.findAll();
        return result.map(() => {
            new PreparedProductB(result.name, result.stock)
        });
    }
}