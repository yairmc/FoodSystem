import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"
import { Order } from './Order.js';
import { Product } from './Product.js';


export const OrderProduct = sequelize.define('orderProduct', {
    quantity: { type: INTEGER(10) },
    details: { type: STRING(50) },
    amount: { type: INTEGER(10) },
    idProduct: { type: INTEGER },
    idOrder: { type: INTEGER }
});

OrderProduct.hasOne(Product, {
    foreignKey: 'idProduct'
})

OrderProduct.hasOne(Order, {
    foreignKey: 'idOrder'
})