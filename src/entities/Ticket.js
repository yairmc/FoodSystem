
export class Ticket{
    constructor(date, paymentAmount, paymentReturn, sucursal){
       // if(typeof orden != "Orden" || orden == undefined){
           // throw Error ("La orden asignada al ticket es invalida");
      //  }else{
           // this._orden = orden
       // }

        if(typeof date != "object" || date == undefined){
            throw Error ("Invalid date ticket");
        }else{
            this._date = date
        }

        if(typeof paymentAmount != "number" || paymentAmount == undefined){
            throw Error ("Invalid amount payment ticket");
        }else{
            this._paymentAmount = paymentAmount
        }

        if(typeof paymentReturn != "number" || paymentReturn == undefined){
            throw Error ("Invalid amount back ticket");
        }else{
            this._paymentReturn = paymentReturn
        }

        if(typeof sucursal != "object" || sucursal == undefined){
            throw Error ("Invalid Sucursal ticket");
        }else{
            this._sucursal = sucursal.sucursalName

        }
    }

    get date(){
        return this._date;
    }

    set date(value){
        if(value == undefined || typeof value !== "object"){
            throw Error ("Invalid date")
        }else{
            this._date = value;
        }
    }

    get paymentAmount(){
        return this._paymentAmount;
    }

    set paymentAmount(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid payment amount")
        }else{
            this._paymentAmount = value;
        }
    }

    get paymentReturn(){
        return this._paymentReturn;
    }

    set paymentReturn(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid payment amount")
        }else{
            this._paymentReturn = value;
        }
    }

    get sucursal(){
        return this._sucursal.name;
    }

    set sucursal(value){
        if(value == undefined || typeof value !== "object"){
            throw Error ("Invalid sucursal amount")
        }else{
            this._sucursal = value.sucursalName;
        }
    }
}