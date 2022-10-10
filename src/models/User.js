import { CHAR, STRING, DATE, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection"

export const User = sequelize.define("user", {
    idUser:{
        type: INTEGER,
        primaryKey:true,
        autoIncrement:true,
        unique:true
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
    }
})