import Sequelize from 'sequelize';

export const sequelize = new Sequelize("foodStore", "root", "root", {
    host: "localhost",
    dialect: "mysql"
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ alert: true });
        if (connection) console.log('Database Connected');
    } catch (error) {
        console.log("error en la coneccion");
    }
}