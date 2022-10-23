import { BOOLEAN, INTEGER, BIGINT } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const TableModel = sequelize.define("table", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    number: { 
        type: INTEGER,
        allowNull: false,
        unique: true
    },
    availability: { type: BOOLEAN,
        allowNull: false 
    },
    dinersNumber: {
        type: INTEGER,
        allowNull: false
    },
}, {
    tablename: 'table',
    timestamps: false,
});
            