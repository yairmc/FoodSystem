export class Branch {
    constructor(name, address){
        if (typeof name != "string" || name == undefined){
            throw Error ("Invalid branch name")
        }
        else{
            this._name = name;
        }

        if(typeof address != "string" || address == undefined){
            throw Error ("Invalid branch address")
        }else{
            this._address= address;
        }
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid branch name")
        }else{
            this._name= value;
        }
    }

    get address(){
        return this._address;
    }

    set address(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid branch address")
        }else{
            this._address = value;
        }
    }
}