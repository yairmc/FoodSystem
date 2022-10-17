import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const IngredientModel = sequelize.define("ingredient", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: { 
        type: STRING(50)
    },
    stock: { 
        type: INTEGER 
    },
}, {
    tableName: 'ingredient',
    timestamps: false
})