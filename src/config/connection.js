import Sequelize from 'sequelize';
import config from '../../config.js';

export const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ force: true });
        if (connection) console.log('Database Connected');
    } catch (error) {
        console.log("Error en la coneccion");
    }
}