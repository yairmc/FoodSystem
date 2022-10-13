import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const OrderProduct = sequelize.define('orderProduct', {
    quantity: { type: INTEGER(10) },
    details: { type: STRING(50) },
    amount: { type: INTEGER(10) },
    idProduct: { type: INTEGER },
    idOrder: { type: INTEGER }
},{ timestamps: false });
