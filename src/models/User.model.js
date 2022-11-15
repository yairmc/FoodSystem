import { CHAR, STRING, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"
import { User } from '../entities/User.js';
export const UserModel = sequelize.define("user", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    name: {
        type: STRING(50),
        allowNull: false
    },
    userName: {
        type: STRING(50),
        unique: true,
        allowNull: false
    },
    password: {
        type: CHAR(200),
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
