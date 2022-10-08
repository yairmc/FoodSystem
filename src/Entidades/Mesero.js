import { Usuario } from "./Usuario.js"

export class Mesero extends Usuario{
    constructor(nombre, username, password){
        super(nombre, username, password)
    }
}