import Sequelize from "sequelize";
import { config } from "dotenv";
config({ path: ".env" });

const database = process.env.DATABASE;
const username = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const dialect = process.env.DIALECT;

export const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
});

export const dbConnection = async () => {
    try {
        const connection = await sequelize.sync({ force: true });
        if (connection) console.log("Database Connected");
    } catch (error) {
        console.log(error);
        console.log("Error en la coneccion");
    }
};
