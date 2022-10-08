export class Ingrediente {
    constructor(nombre, unidadDisponibles){
        if (typeof nombre != "string" || nombre == undefined){
            throw Error ("Nombre del ingrediente invalido")
        }
        else{
            this._nombre = nombre;
        }

        if(typeof unidadDisponibles != "number" || precio == undefined){
            throw Error ("Las unidades disponibles introducidas son invalidas")
        }else{
            this._unidadDisponibles = unidadDisponibles;
        }
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(valor){
        if(valor == undefined || typeof valor !== "string"){
            throw Error ("Nombre del ingrediente invalido")
        }else{
            this._nombre = valor;
        }
    }

    get unidadDisponibles(){
        return this._unidadDisponibles;
    }

    set unidadDisponibles(valor){
        if(valor == undefined || typeof valor !== "number"){
            throw Error ("Las unidades disponibles introducidas son invalidas")
        }else{
            this._unidadDisponibles = valor;
        }
    }
}