import { DATE, FLOAT, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Ticket = sequelize.define("ticket", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    paymentAmount: { type: FLOAT(10, 2) },
    paymentReturn: { type: FLOAT(10, 2) },
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
