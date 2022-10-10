import { BOOLEAN, INTEGER,BIGINT } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Table = sequelize.define("table", {
    idTable: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    availability: { type: BOOLEAN },
    dinersNumber: { type: INTEGER }
})