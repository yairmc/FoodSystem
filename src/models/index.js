import { dbConnection } from "../config/connection.js";
import {User, Role  } from "./BarrelFile.js";
const main=async () =>{
    try {
        await dbConnection();
    } catch (error) {
        console.log(error);
    }
}
main();