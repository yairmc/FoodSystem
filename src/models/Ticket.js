import { DATE, FLOAT } from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Ticket = sequelize.define("ticket", {
    // order campo con relacion a Order
    date: { type: DATE },
    paymentAmoutn: { type: FLOAT(10, 2) },
    paymentReturn: { type: FLOAT(10, 2) },
    // sucursal campo con relacion a Branch
})