import { BOOLEAN, INTEGER, BIGINT } from 'sequelize';
import { sequelize } from "../config/connection.js"
import { Order } from './Order.js';

export const Table = sequelize.define("table", {
    availability: { type: BOOLEAN },
    dinersNumber: { type: INTEGER },
}, { timestamps: false })
