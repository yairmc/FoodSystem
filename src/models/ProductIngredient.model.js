import { INTEGER, STRING } from "sequelize";
import { sequelize } from "../config/connection.js";

export const ProductIngredientModel = sequelize.define("productIngredient", {
    quantity: { type: INTEGER,
        allowNull: false 
    },
    ingredientId: {
        type: INTEGER,
        allowNull: false
    },
    productId: {
        type: INTEGER,
        allowNull: false
    }
}, {
    tableName: 'productIngredient',
    timestamps: false
})
