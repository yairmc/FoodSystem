import { dbConnection } from "../config/connection.js";
import {User, Order, OrderProduct, Product, Table, Ticket, Branch, PackagingProduct, PreparedProduct, Ingredients,  } from "./BarrelFile.js";
const main=async () =>{
    try {
        await dbConnection();
    } catch (error) {
        console.log(error);
    }
}
main();