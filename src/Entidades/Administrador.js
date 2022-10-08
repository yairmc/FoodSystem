import { Usuario } from "./Usuario.js"

export class Administrador extends Usuario{
    constructor(nombre, username, password){
        super(nombre, username, password)
    }
}