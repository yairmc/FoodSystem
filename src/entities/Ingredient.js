export class Ingredient {
    constructor(name, stock){
        if (typeof name !== "string" || name == undefined){
            throw Error ("Invalid name ingredient")
        }
        else{
            this._name = name;
        }

        if(typeof stock != "number" || stock  == undefined){
            throw Error ("Invalid stock")
        }else{
            this._stock = stock;
        }
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid name ingredient")
        }else{
            this._name = value;
        }
    }

    get stock(){
        return this._stock;
    }

    set stock(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid stock")
        }else{
            this._stock = value;
        }
    }

    toPersistenceObject(){
        return {
            name: this._name,
            stock: this._stock,   
        }
    }
}