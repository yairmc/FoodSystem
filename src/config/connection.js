import Sequelize from 'sequelize';

export const sequelize = new Sequelize("foodStore", "root", "root1234", {
    host: "localhost",
    dialect: "mysql"
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ force: true });
        if (connection) console.log('Database Connected');
    } catch (error) {
        console.log("Error en la coneccion");
    }
}