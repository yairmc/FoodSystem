import { CHAR, STRING, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const User = sequelize.define("user", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: STRING(50),
        unique: true,
        allowNull: false
    },
    userName: {
        type: STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: CHAR(50),
        allowNull: false
    },
    roleId: {
        type: INTEGER,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: false
});

