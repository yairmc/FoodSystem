export class Role {
    constructor(name){
        if(typeof name != "string" || name == undefined){
            throw Error ("Invalid name role");
        }else{
            this._name = name;
        }
    }

    get name(){
        return this._name
    }

    set name(value){
        if(value == undefined || typeof value != "string"){
            throw Error ("Invalid name role")
        }else{
            this._name = value;
        }
    }

    toPersistenceObject(){
        return {
            name: this._name        
        }
    }
}