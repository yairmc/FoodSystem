import dbConfig from '../config/db-config.js';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ alert: true });
        if (connection) console.log('Database Connected');
    } catch (error) {

    }
}