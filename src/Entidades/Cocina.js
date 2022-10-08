import { Usuario } from "./Usuario.js"

export class Cocina extends Usuario{
    constructor(nombre, username, password){
        super(nombre, username, password)
    }
}