import { BIGINT, INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const Branch = sequelize.define("branch", {
    idBranch: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    sucursarName: { type: STRING(50) },
    sucursalAdress: { type: STRING(50) }
},{ timestamps: false })