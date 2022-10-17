import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const OrderProductModel = sequelize.define('orderProduct', {
    quantity: { 
        type: INTEGER(10)
    },
    details: { 
        type: STRING(50)
     },
    amount: { 
        type: INTEGER(10)
     },
    orderId: {
        type: INTEGER,
        allowNull: false
    },
    productId: {
        type: INTEGER,
        allowNull: false
    }
}, {
    tableName: 'orderProduct',
    timestamps: false
});
