import dbConfig from ('../config/db-config');
import { BOOLEAN, CHAR, DATE, FLOAT, INTEGER, STRING,DATE } from 'sequelize';
import Sequelize from ('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

export const User = sequelize.define("user", {
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
}, { tableName: "user" })

export const Order = sequelize.define('order', {
    total: { type: FLOAT(10) },
    subTotal: { type: FLOAT(10) },
    state: { type: BOOLEAN },
    // orderProduct campo con relacion a orderProducts
    // waiter campo con relacion a user


}, { tableName: "order" });

export const OrderProducts = sequelize.define('orderProduct', {
    // product campo con relacion a product
    quantity: { type: INTEGER(10) },
    details: { type: STRING(50) },
    amount: { type: INTEGER(10) }
}, { tableName: "order" });

export const Product = sequelize.define("product", {
    code: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { type: STRING(50) },
    basePrice: { type: INTEGER(10) },
    cost: { type: INTEGER(10) },
    availability: { type: BOOLEAN },
    taxes: { type: FLOAT(10) }
}, { tableName: "product" });

export const Table=sequelize.define("table",{
    idTable: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    availability:{type:BOOLEAN},
    dinersNumber:{type:INTEGER(10)}
}, { tableName: "table" })

export const Ticket=sequelize.define("ticket",{
    // order campo con relacion a Order
    date:{type:DATE},
    paymentAmoutn:{type:FLOAT(10,2)},
    paymentReturn:{type:FLOAT(10,2)},
    // sucursal campo con relacion a Branch
}, { tableName: "ticket" })

export const Branch = sequelize.define("branch", {
    code: {
        type: BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    sucursarName: { type: STRING(50) },
    sucursalAdress: { type: STRING(50) }
}, { tableName: "branch" })

export const Ingredients = sequelize.define("ingredients", {
    name: { type: STRING(50) },
    stock: { type: INTEGER(50) }
}, { tableName: "ingredients" })

export const PrepareProduct=sequelize.define('prepareProduct',{
    name:{type:STRING(50)},
    stock:{type:INTEGER(10)}
},{ tableName: "prepareProducts" })

export const PackingProducts=sequelize.define('packingProducts',{
    name:{type:STRING(50)},
    stock:{type:INTEGER(10)}
},{ tableName: "packingProducts" })