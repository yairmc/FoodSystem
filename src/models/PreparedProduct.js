import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection"


export const PrepareProduct = sequelize.define('prepareProduct', {
    name: { type: STRING(50) },
    stock: { type: INTEGER }
})