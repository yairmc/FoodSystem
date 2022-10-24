import { INTEGER, STRING } from 'sequelize';
import { sequelize } from "../config/connection.js"


export const BranchModel = sequelize.define("branch", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    branchName: {
        type: STRING(50),
        allowNull: false,
        unique: true
    },

    branchAddress: {
        type: STRING(50),
        allowNull: false
    }
}, {
    tableName: 'branch',
    timestamps: false,
})