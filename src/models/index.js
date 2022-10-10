import { dbConnection } from "../config/connection.js";
const main=async () =>{
    try {
        await dbConnection();
    } catch (error) {
        console.log(error);
    }
}

main();