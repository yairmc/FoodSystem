import { PackagingProduct } from "./PackagingProduct.js"

export class PackagedDessert extends PackagingProduct{
    constructor(name, basePrice, cost, availability, taxes, stock){
        super(name, basePrice, cost, availability, taxes, stock)
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid name product")
        }else{
            this._name = value;
        }
    }

    get basePrice(){
        return this._basePrice;
    }

    set basePrice(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid basePrice product")
        }else{
            this._basePrice = value;
        }
    }

    get cost(){
        return this._cost;
    }

    set cost(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid cost product")
        }else{
            this._cost = value;
        }
    }

    get availability(){
        return this._availability;
    }

    set availability(value){
        if(value == undefined || typeof value !== "boolean"){
            throw Error ("Invalid availability product")
        }else{
            this._availability = value;
        }
    }

    get taxes(){
        return this._taxes;
    }

    set taxes(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid taxes product")
        }else{
            this._taxes = value;
        }
    }

    get stock(){
        return this._stock;
    }

    set stock(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid stock product")
        }else{
            this._stock = value;
        }
    }
}