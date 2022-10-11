import { dbConnection } from "../config/connection.js";
import {ProductIngredient, Ingredient  } from "./BarrelFile.js";
const main=async () =>{
    try {
        await dbConnection();
    } catch (error) {
        console.log(error);
    }
}
main();