import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const BranchModel = sequelize.define("branch", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    branchName: { type: STRING(50) },
    branchAdress: { type: STRING(50) }
}, {
    tableName: 'branch',
    timestamps: false,
})