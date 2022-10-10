import  Sequelize  from "sequelize";
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});


export const Administrator = sequelize.define("administrator", {
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
});