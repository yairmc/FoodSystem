import { BIGINT, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const Branch = sequelize.define("branch", {
    code: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    sucursarName: { type: STRING(50) },
    sucursalAdress: { type: STRING(50) }
})