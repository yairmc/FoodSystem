import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"
import { ProductIngredient } from './ProductIngredient.js';

export const Ingredient = sequelize.define("ingredient", {
    idIngredient: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: { type: STRING(50) },
    stock: { type: INTEGER }
})
ProductIngredient.hasMany(Ingredient)

Ingredient.belongsTo(ProductIngredient,{
    foreignKey: 'idIngredient'
})