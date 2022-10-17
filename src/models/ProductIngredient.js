import { INTEGER, STRING } from "sequelize";
import { sequelize } from "../config/connection.js";

export const ProductIngredient = sequelize.define("productIngredient", {
    quantity: { type: INTEGER },
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
