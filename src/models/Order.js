import { BOOLEAN, FLOAT, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Order = sequelize.define('order', {
    id: { 
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
     },
    total: { type: FLOAT(10, 2) },
    subTotal: { type: FLOAT(10, 2) },
    state: { type: BOOLEAN },
},{ timestamps: false });