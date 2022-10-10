import { BOOLEAN, FLOAT, INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection"


export const Product = sequelize.define("product", {
    name: { type: STRING(50) },
    basePrice: { type: INTEGER },
    cost: { type: INTEGER },
    availability: { type: BOOLEAN },
    taxes: { type: FLOAT(10, 2) }
});