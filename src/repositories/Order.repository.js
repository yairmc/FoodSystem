import { Order }  from '../entities/Order.js';
import { OrderModel } from '../models/Order.model.js';

export class OrderRepository {

    async create (order) {
        const orderPO = order.toPersistenceObject();
        const result = await OrderModel.create(orderPO);      
        return new Order(result.state, result.total, result.subtotal, result.tableId, result.userId);
    }

    async update (id, order) {
        if (order.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await OrderModel.update({state: order.state, total: order.total, subtotal: order.subtotal, table: order.tableId, waiter: order.userId }, {
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await OrderModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await OrderModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await OrderModel.findAll({
            order: ['id'],
            attributes: ['state', 'total', 'subtotal', 'table', 'waiter']
        });
        return JSON.stringify(result);
    }
}