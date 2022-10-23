import  { OrderProduct }  from '../entities/OrderProduct.js';
import { OrderProductModel } from '../models/OrderProduct.model.js';

export class OrderProductRepository {

    async createOrderProduct(orderProduct) {
        const newOrderProducto = await OrderProductModel.create(orderProduct);     
        return new OrderProduct(newOrderProducto.quantity, newOrderProducto.details, newOrderProducto.amount, resnewOrderProductoult.order, newOrderProducto.product).toPersistenceObject();
    }

    async updateOrderProduct(id, orderProducts) {
        const orderProductUpdated = await OrderProductModel.update({quantity: orderProducts.quantity, details: orderProducts.details, amount: orderProducts.amount, order: orderProducts.order, product: orderProducts.product },{
            where: {
                id
            }
        });
        return orderProductUpdated;
    }

    async deleteOrderProduct(id) {
        const orderProductDeleted = await OrderProductModel.destroy({
            where: {
                id
            }
        });
        return orderProductDeleted;
    }

    async findOrderProductById(id) {
        const orderProduct = await OrderProductModel.findOne({
            where: {
                id
            }
        });
        return orderProduct;
    }

    async findAllOrderProducts() {
        const orderProducts = await OrderProductModel.findAll({
            orderProduct: ['id'],
            attributes: ['quantity', 'details', 'amount', 'order', 'product']
        });
        return orderProducts;
    }
}