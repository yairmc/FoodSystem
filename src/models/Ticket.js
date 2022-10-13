import { DATE, FLOAT, INTEGER } from 'sequelize';
import { sequelize } from "../config/connection.js"
import { Branch } from './Branch.js';
import { Order } from './Order.js';

export const Ticket = sequelize.define("ticket", {
    date: { type: DATE },
    paymentAmoutn: { type: FLOAT(10, 2) },
    paymentReturn: { type: FLOAT(10, 2) },
    idBranch: { type: INTEGER },
    idOrder: { type: INTEGER }
},{ timestamps: false });
