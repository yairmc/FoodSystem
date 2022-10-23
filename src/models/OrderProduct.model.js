import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const OrderProductModel = sequelize.define('orderProduct', {
    quantity: { 
        type: INTEGER,
        allowNull: false
    },
    details: { 
        type: STRING(50),
        allowNull: false
     },
    amount: { 
        type: INTEGER,
        allowNull: false
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
