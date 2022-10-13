import { dbConnection } from "../config/connection.js";
import "./BarrelFile.js";
import "./asociations.js"
const main=async () =>{
    try {
        await dbConnection();
    } catch (error) {
        console.log(error);
    }
}
main();