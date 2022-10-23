import { DATE, FLOAT, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const TicketModel = sequelize.define("ticket", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    paymentAmount: { 
        type: FLOAT(10, 2),
        allowNull: false 
    },
    paymentReturn: { 
        type: FLOAT(10, 2),
        allowNull: false
     },
    orderId: {
        type: INTEGER,
        allowNull: false
    },
    branchId: {
        type: INTEGER,
        allowNull: false
    }
}, {
    tableName: 'ticket',
    createdAt: 'date',
    updatedAt: false,
});
