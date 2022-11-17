import jwt from "jsonwebtoken";
import { config } from "dotenv";
import moment from "moment";
config({ path: ".env" });
import RolesRepository from "../repositories/Roles.repository.js";
const rolesRepo = new RolesRepository();

const whiteList = [
    "POST/auth",
    "GET/auth",
]
 
const endpointsWaither = [
    "GET/orders",
    "POST/orders",
    "PUT/orders",
    "DELETE/orders",

    "GET/products",

    "GET/ingredients",

    "GET/tables",
    "POST/tables",
    "PUT/tables",
    "DELETE/tables",

    "GET/tickets",
    "POST/tickets",
    "PUT/tickets",
    "DELETE/tickets",

    "GET/users",

]

const endpointsKitchen = [
    "GET/orders",

    "GET/products",

    "GET/ingredients",

    "GET/tables",

];


export function validateUrlRequest(req, res, next) {
    const { url, method } = req;
    const urlFormated = url.split("/")[1];
    const endPoint = `${method}/${urlFormated}`;
    const isValidEndPoint = whiteList.find(end => end === endPoint);
    if (!isValidEndPoint) return validateToken(req, res, next);
    next();
}


export async function validateToken(req, res, next) {
    if (!req.headers.authorization) return res.status(403).json({ msg: "Access denied" });
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.decode(token, process.env.SECRETKEY);
    const { roleId } = user;
    const { dataValues: roleFound } = await rolesRepo.getRoleById(roleId);
    if (!roleFound) return res.status(403).json({ msg: "Access denied" });

    switch (roleFound.name) {
        case "Waither": return validateAccessWaither(req, res, next);
            break;
        case "Kitchen": return validateAccessKitchen(req, res, next);
    }
    next();
}
export function validateAccessKitchen(req, res, next){
    const { url, method } = req;
    const urlFormated = url.split("/")[1];
    const endPoint = `${method}/${urlFormated}`;

    const isValidEndPoint = endpointsKitchen.find(end => end === endPoint);
    if (!isValidEndPoint) return res.status(403).json({ msg: "Access denied" });
    next();
}

export function validateAccessWaither(req, res, next) {
    const { url, method } = req;
    const urlFormated = url.split("/")[1];
    const endPoint = `${method}/${urlFormated}`;

    const isValidEndPoint = endpointsWaither.find(end => end === endPoint);
    if (!isValidEndPoint) return res.status(403).json({ msg: "Access denied" });
    next();
}



