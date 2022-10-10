import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const PackagingProduct = sequelize.define('packagingProduct', {
    name: { type: STRING(50) },
    stock: { type: INTEGER }
})