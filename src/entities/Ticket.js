
export class Ticket{
    constructor(paymentAmount, paymentReturn, orderId, branchId, date){
       if(typeof orderId!= "number" || orderId == undefined){
            throw Error ("Invalid order");
        }else{
           this._orderId = orderId
        }

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

        if(typeof branchId != "number" || branchId == undefined){
            throw Error ("Invalid Sucursal ticket");
        }else{
            this._branchId = branchId

        }
    }

    get orderId(){
        return this._orderId;
    }

    set orderId(value){
        if(value == undefined || typeof value !== "object"){
            throw Error ("Invalid orderId")
        }else{
            this._orderId = value;
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

    get branchId(){
        return this._branchId;
    }

    set branchId(value){
        if(value == undefined || typeof value !== "object"){
            throw Error ("Invalid sucursal")
        }else{
            this._branchId = value;
        }
    }

    toPersistenceObject(){
        return {
            orderId: this._orderId,
            date: this._date,
            paymentAmount: this._paymentAmount,
            paymentReturn: this._paymentReturn,   
            branchId: this._branchId
        }
    }
}