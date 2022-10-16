import { INTEGER, STRING } from "sequelize";
import { sequelize } from "../config/connection.js";

export const ProductIngredient = sequelize.define("productIngredient", {
    quantity: { type: INTEGER },
}, {
    tableName: 'productIngredient',
    timestamps: false
})
