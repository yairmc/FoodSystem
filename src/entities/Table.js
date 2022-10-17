export class Table{
    constructor(idTable, availability, dinersNumber){
        if(typeof idTable != "number" || idTable == undefined){
            throw new Error("Ivalid id table");
        }else{
            this._idTable = idTable
        }

        if(typeof availability != "boolean" || availability == undefined){
            throw new Error("Ivalid state table");
        }else{
            this._idTable = idTable
        }

        if(typeof dinersNumber != "number" || dinersNumber == undefined){
            throw new Error("Ivalid diners Number");
        }else{
            this._idTable = idTable
        }
    }

    get idTable(){
        return this._idTable;
    }

    set idTable(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Ivalid id table")
        }else{
            this._idTable= value;
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
            idTable: this._idTable,
            availability: this._availability,
            dinersNumber: this._dinersNumber,   
        }
    }
}