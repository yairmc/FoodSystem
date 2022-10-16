import { BOOLEAN, INTEGER, BIGINT } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Table = sequelize.define("table", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    availability: { type: BOOLEAN },
    dinersNumber: { type: INTEGER },
}, {
    tablename: 'table',
    timestamps: false,
});
