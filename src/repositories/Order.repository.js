import { Order }  from '../entities/Order.js';
import { OrderModel } from '../models/Order.model.js';

export class OrderRepository {

    async createOrder(order) {
        const newOrder = await OrderModel.create(order);      
        return new Order(newOrder.state, newOrder.total, newOrder.subtotal, newOrder.tableId, newOrder.userId).toPersistenceObject();
    }

    async updateOrder(id, order) {
        const orderUpdated = await OrderModel.update({state: order.state, total: order.total, subtotal: order.subtotal, table: order.tableId, waiter: order.userId }, {
            where: {
                id
            }
        });
        return orderUpdated;
    }

    async deleteOrder(id) {
        const orderDeleted = await OrderModel.destroy({
            where: {
                id
            }
        });
        return orderDeleted;
    }

    async findOrderById(id) {
        const order = await OrderModel.findOne({
            where: {
                id
            }
        });
        return order;
    }

    async findAllOrders() {
        const allOrders = await OrderModel.findAll({
            order: ['id'],
            attributes: ['state', 'total', 'subtotal', 'table', 'waiter']
        });
        return allOrders;
    }
}