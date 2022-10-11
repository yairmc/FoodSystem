import  OrderB  from '../entities/Order.js';
import { Order } from '../models/Order.js';

export class OrderRepository {

    async create (order) {
        const result = await Order.create(order._state, order._orderProduct, order._table, order._waiter);      
        
        return new OrderB(result.state, result.orderProduct, result.table, result.waiter);
    }

    async update (order) {
        if (order.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await Order.update(order, {
            where: {
                id: order.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await Order.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await Order.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await Order.findAll();
        return result.map(() => {
            new OrderB(result.state, result.orderProduct, result.table, result.waiter)
        });
    }
}