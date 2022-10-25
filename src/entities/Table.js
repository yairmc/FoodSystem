export class Table{
    constructor(number, availability, dinersNumber){
        if(typeof  number == undefined){
            throw new Error("Ivalid id table");
        }else{
            this._number = number
        }

        if(typeof availability != "boolean" || availability == undefined){
            throw new Error("Ivalid state table");
        }else{
            this._availability = availability
        }

        if(typeof dinersNumber != "number" || dinersNumber == undefined){
            throw new Error("Ivalid diners Number");
        }else{
            this._dinersNumber = dinersNumber
        }
    }

    get number(){
        return this._number;
    }

    set number(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Ivalid id table")
        }else{
            this._number = value;
        }
    }

    get availability(){
        return this._availability;
    }

    set availability(value){
        if(value == undefined || typeof value !== "boolean"){
            throw Error ("Ivalid state table")
        }else{
            this._availability = value;
        }
    }

    get dinersNumber(){
        return this._dinersNumber;
    }

    set dinersNumber(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Ivalid diners Number")
        }else{
            this._dinersNumber= value;
        }
    }

    toPersistenceObject(){
        return {
            number: this._number,
            availability: this._availability,
            dinersNumber: this._dinersNumber,   
        }
    }
}