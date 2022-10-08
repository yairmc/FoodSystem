export class Sucursal {
    constructor(nombre, direccion){
        if (typeof nombre != "string" || nombre == undefined){
            throw Error ("Nombre de la sucursal invalido")
        }
        else{
            this._nombre = nombre;
        }

        if(typeof direccion != "string" || direccion == undefined){
            throw Error ("La direccion de la sucursal es invalida")
        }else{
            this._direccion = direccion;
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(valor){
        if(valor == undefined || typeof valor !== "string"){
            throw Error ("Nombre de la sucursal invalido")
        }else{
            this._nombre = valor;
        }
    }

    get direccion(){
        return this._direccion;
    }

    set direccion(valor){
        if(valor == undefined || typeof valor !== "string"){
            throw Error ("La direccion de la sucursal es invalida")
        }else{
            this._direccion = valor;
        }
    }
}