export class OrderProduct{
    constructor(product, quantity, details){
        if(typeof product != "object" || product == undefined){
            throw new Error("Invalid product");
        }else{
            this._product = product;
            this._amount = (this._product.basePrice * quantity);
        }

        if(typeof quantity != "number" || quantity == undefined){
            throw new Error("Invalid quantity");
        }else{
            this._quantity = quantity;
        }

        if(typeof details != "string" || details == undefined){
            throw new Error("Invalid details");
        }else{
            this._details= details;
        }
    }

    get product(){
        return this._product;
    }

    set product(value){
        if(value == undefined || typeof value !== "object"){
            throw Error ("Invalid product")
        }else{
            this._product = value;
        }
    }

    get quantity(){
        return this._username;
    }

    set quantity(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid quantity")
        }else{
            this._quantity= value;
        }
    }

    get details(){
        return this._details;
    }

    set details(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid details")
        }else{
            this._details = value;
        }
    }

}