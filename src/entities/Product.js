export class Product {
    constructor(name, basePrice, cost, availability, taxes, type, stock) {
        if (new.target === Product) {
           throw new Error("This is an abstract class");
        }

        if(typeof name != "string" || name == undefined){
            throw new Error("Invalid name product");
        }else{
            this._name = name;
        }

        if(typeof basePrice != "number" || basePrice == undefined){
            throw new Error("Invalid base price product");
        }else{
            this._basePrice = basePrice;
        }

        if(typeof cost != "number" || cost == undefined){
            throw new Error("Invalid cost product");
        }else{
            this._cost = cost;
        }

        if(typeof availability != "boolean" || availability == undefined){
            throw new Error("Invalid availability product");
        }else{
            this._availability = availability;
        }

        if(typeof taxes != "number" || taxes == undefined){
            throw new Error("Invalid taxes product");
        }else{
            this._taxes = taxes;
        }

        if(typeof type != "string" || type == undefined){
            throw new Error("Invalid type product");
        }else{
            this._type = type;
        }

        if(typeof stock != "number" || stock == undefined){
            throw new Error("Invalid stock product");
        }else{
            this._stock = stock;
        }
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid name producto")
        }else{
            this._name = value;
        }
    }

    get basePrice(){
        return this._basePrice;
    }

    set basePrice(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid basePrice producto")
        }else{
            this._basePrice = value;
        }
    }

    get cost(){
        return this._cost;
    }

    set cost(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid cost producto")
        }else{
            this._cost = value;
        }
    }

    get availability(){
        return this._availability;
    }

    set availability(value){
        if(value == undefined || typeof value !== "boolean"){
            throw Error ("Invalid availability producto")
        }else{
            this._availability = value;
        }
    }

    get taxes(){
        return this._taxes;
    }

    set taxes(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid taxes producto")
        }else{
            this._taxes = value;
        }
    }

    get type(){
        return this._type;
    }

    set type(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid type producto")
        }else{
            this._type = value;
        }
    }

    get stock(){
        return this._stock;
    }

    set stock(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid stock producto")
        }else{
            this._stock = value;
        }
    }

    toPersistenceObject(){
        return {
            name: this._name,
            basePrice: this._basePrice,
            cost: this._cost,   
            availability: this._availability,
            taxes: this._taxes,
            type: this._type,
            stock: this._stock
        }
    }
}