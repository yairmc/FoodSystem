import { BOOLEAN, FLOAT, INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const ProductModel = sequelize.define("product", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: { 
        type: STRING(50), 
        unique: true,
        allowNull: false
    },
    basePrice: { 
        type: INTEGER,
        allowNull: false
    },
    cost: { 
        type: INTEGER,
        allowNull: false 
    },
    availability: { 
        type: BOOLEAN,
        allowNull: false 
    },
    taxes: { type: FLOAT(10, 2),
        allowNull: false 
    },
    type: { type: STRING(50),
        allowNull: false
     },
    stock: { 
        type: INTEGER,
        allowNull: true
     }
}, {
    tableName: 'product',
    timestamps: false
});