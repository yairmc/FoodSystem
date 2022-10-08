export class Ingredient {
    constructor(name, availableUnits){
        if (typeof name != "string" || name == undefined){
            throw Error ("Invalid name ingredient")
        }
        else{
            this._name = name;
        }

        if(typeof availableUnits != "number" || availableUnits  == undefined){
            throw Error ("Invalid units")
        }else{
            this._availableUnits = availableUnits;
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

    get availableUnits(){
        return this._availableUnits;
    }

    set availableUnits(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid units")
        }else{
            this._availableUnits = value;
        }
    }
}