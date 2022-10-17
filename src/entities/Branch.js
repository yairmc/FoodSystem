export class Branch {
    constructor(sucursalName, sucursalAddress){
        if (typeof sucursalName != "string" || sucursalName == undefined){
            throw Error ("Invalid sucursal name")
        }
        else{
            this._sucursalName = sucursalName;
        }

        if(typeof sucursalAddress != "string" || sucursalAddress == undefined){
            throw Error ("Invalid sucursal address")
        }else{
            this._sucursalAddress = sucursalAddress;
        }
    }

    get sucursalName(){
        return this._sucursalName;
    }

    set sucursalName(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid sucursal name")
        }else{
            this._sucursalName = value;
        }
    }

    get sucursalAddress(){
        return this._sucursalAddress;
    }

    set sucursalAddress(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid sucursal address")
        }else{
            this._sucursalAddress = value;
        }
    }

    toPersistenceObject(){
        return {
            sucursalName: this._sucursalName,
            sucursalAddress: this._sucursalAddress,  
        }
    }
}