import { INTEGER, STRING } from "sequelize";
import { sequelize } from "../config/connection.js";

export const ProductIngredient = sequelize.define("productIngredient", {
    quantity: { type: INTEGER },
    idProduct:{type:INTEGER},
    idIngredient: { type: INTEGER },
},{ timestamps: false })
