import { BOOLEAN, FLOAT, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const OrderModel = sequelize.define('order', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    state: {
        type: INTEGER,
        allowNull: false
    },
    total: { 
        type: FLOAT(10, 2),
        allowNull: true 
    },
    subTotal: { 
        type: FLOAT(10, 2),
        allowNull: true
    },
    userId: {
        type: INTEGER,
        allowNull: false
    },
    tableId: {
        type: INTEGER,
        allowNull: false
    }
}, {
    tableName: 'order',
    timestamps: false
});

// state: this._state,
// orderProduct: this._orderProduct,
// total: this._total,
// subtotal: this._subtotal,
// table: this._table,
// waiter: this._waiter 