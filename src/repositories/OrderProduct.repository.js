import  OrderProductB  from '../entities/OrderProduct.js';
import { orderProduct } from '../models/OrderProduct.js';

export class OrderProductRepository {

    async create (orderProducts) {
        const result = await OrderProducts.create(orderProducts._product, orderProducts._quantity, orderProducts._details);      
        
        return new OrderProductB(result.product, result.quantity, result.details);
    }

    async update (orderProducts) {
        if (orderProducts.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await OrderProducts.update(orderProducts, {
            where: {
                id: orderProducts.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await OrderProducts.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await OrderProducts.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await OrderProducts.findAll();
        return result.map(() => {
            new OrderProductB(result.product, result.quantity, result.details)
        });
    }
}