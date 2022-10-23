import { Order }  from '../entities/Order.js';
import { OrderModel } from '../models/Order.model.js';

export default class OrderRepository {

    async createOrder(order) {
        const newOrder = await OrderModel.create(order);      
        return new Order(newOrder.state, newOrder.total, newOrder.subTotal ,newOrder.userId, newOrder.tableId).toPersistenceObject();
    }

    async updateOrder(id, order) {
        const orderUpdated = await OrderModel.update({state: order.state, total: order.total, subTotal: order.subTotal, userId: order.userId, tableId: order.tableId }, {
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

    async getOrderById(id) {
        const order = await OrderModel.findOne({
            where: {
                id
            }
        });
        return order;
    }

    async getAllOrders() {
        const allOrders = await OrderModel.findAll({
            order: ['id'],
            attributes: ['state', 'total', 'subTotal', 'userId', 'tableId']
        });
        return allOrders;
    }
}