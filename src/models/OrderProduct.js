import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const OrderProduct = sequelize.define('orderProduct', {
    // product campo con relacion a product
    quantity: { type: INTEGER(10) },
    details: { type: STRING(50) },
    amount: { type: INTEGER(10) }
});