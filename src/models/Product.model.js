import { BOOLEAN, FLOAT, INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const ProductModel = sequelize.define("product", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: { type: STRING(50) },
    basePrice: { type: INTEGER },
    cost: { type: INTEGER },
    availability: { type: BOOLEAN },
    taxes: { type: FLOAT(10, 2) },
    type: { type: STRING(50) },
    stock: { type: INTEGER }
}, {
    tableName: 'product',
    timestamps: false
});