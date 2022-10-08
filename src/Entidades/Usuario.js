 export class Usuario{
    constructor(nombre, username, password){
        if(new.target === Usuario){
            throw new Error("Esta es una clase abstracta");
        }

        if (typeof nombre != "string" || nombre == undefined){
            throw Error ("Nombre del usuario invalido")
        }
        else{
            this._nombre = nombre;
        }

        if (typeof username != "string" || username == undefined){
            throw Error ("Username invalido")
        }
        else{
            this._username = username;
        }

        if (typeof password != "string" || password == undefined){
            throw Error ("password invalido")
        }
        else{
            this._password = password;
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

    get username(){
        return this._username;
    }

    set username(valor){
        if(valor == undefined || typeof valor !== "string"){
            throw Error ("Username invalido")
        }else{
            this._username = valor;
        }
    }

    get password(){
        return this._password;
    }

    set password(valor){
        if(valor == undefined || typeof valor !== "string"){
            throw Error ("Password invalido")
        }else{
            this._password = valor;
        }
    }
}