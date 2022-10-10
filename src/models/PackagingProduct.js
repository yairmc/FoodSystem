import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection"


export const PackingProducts = sequelize.define('packingProducts', {
    name: { type: STRING(50) },
    stock: { type: INTEGER }
})