import user from "./User.js"
import { sequelize } from "../config/connection.js"

export const Administrator = sequelize.define("administrator");