import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Ingredients = sequelize.define("ingredients", {
    name: { type: STRING(50) },
    stock: { type: INTEGER }
})