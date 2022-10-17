import { BOOLEAN, INTEGER, BIGINT } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const TableModel = sequelize.define("table", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    number: {type: INTEGER},
    availability: { type: BOOLEAN },
    dinersNumber: { type: INTEGER },
}, {
    tablename: 'table',
    timestamps: false,
});
