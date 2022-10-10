import { BOOLEAN, FLOAT} from 'sequelize';
import { sequelize } from "../config/connection.js"

export const Order = sequelize.define('order', {
    total: { type: FLOAT(10,2) },
    subTotal: { type: FLOAT(10,2) },
    state: { type: BOOLEAN },
    // orderProduct campo con relacion a orderProducts
    // waiter campo con relacion a user


});