import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const PreparedProduct = sequelize.define('preparedProduct', {
    name: { type: STRING(50) },
    stock: { type: INTEGER }
})