import { Administrador } from "./Entidades/Administrador.js";
import { Usuario } from "./Entidades/Usuario.js"
import {Sucursal} from "./Entidades/Sucursal.js"
import {Ticket} from "./Entidades/Ticket.js"

const admin = new Administrador("Manuel", "ManuelVzla03", "manuel123");
const admin2 = new Administrador("Jesus", "ManuelVzla03", "manuel123");
const admin3= new Administrador("Blanca", "ManuelVzla03", "manuel123");  

const suc = new Sucursal("KFC", "Miguel aleman, sin numero");

const d = new Date();

const t = new Ticket(d, 100, 50, suc)

const listaAdmins = [admin, admin2, admin3]

console.log( listaAdmins[2]);