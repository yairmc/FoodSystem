import { BOOLEAN, FLOAT, INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"
import { ProductIngredient } from './ProductIngredient.js';


export const Product = sequelize.define("product", {
    name: { type: STRING(50) },
    basePrice: { type: INTEGER },
    cost: { type: INTEGER },
    availability: { type: BOOLEAN },
    taxes: { type: FLOAT(10, 2) },
    typeProduct: { type: STRING(50) },
    stock: { type: INTEGER }
});

ProductIngredient.hasOne(Product)

Product.belongsTo(ProductIngredient, {
    foreignKey: 'idProduct'
})