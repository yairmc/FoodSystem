import  { OrderProduct }  from '../entities/ProductIngredient.js';
import { OrderProductModel } from '../models/OrderProduct.model.js';

export class OrderProductRepository {

    async create (orderProducts) {
        const orderProductPO = orderProducts.toPersistenceObject();
        const result = await OrderProductModel.create(orderProductPO);     
        return new OrderProduct(result.quantity, result.details, result.amount, result.order, result.product);
    }

    async update (id, orderProducts) {
        if (orderProducts.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await OrderProductModel.update({quantity: orderProducts.quantity, details: orderProducts.details, amount: orderProducts.amount, order: orderProducts.order, product: orderProducts.product },{
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await OrderProductModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await OrderProductModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await OrderProductModel.findAll({
            orderProduct: ['id'],
            attributes: ['quantity', 'details', 'amount', 'order', 'product']
        });
        return JSON.stringify(result);
    }
}