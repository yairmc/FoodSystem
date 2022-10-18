export class ProductIngredient{
    constructor(quantity, ingredientId, productId){
        if(typeof quantity != "number" || quantity == undefined){
            throw new Error("Invalid quantity");
        }else{
            this._quantity = quantity;
        }

        if(typeof ingredientId != "number" || ingredientId == undefined){
            throw new Error("Invalid ingredient");
        }else{
            this._ingredientId= ingredientId;
        }

        if(typeof productId != "number" || productId == undefined){
            throw new Error("Invalid product");
        }else{
            this._productId= productId;
        }
    }

    get quantity(){
        return this._quantity;
    }

    set quantity(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid quantity")
        }else{
            this._quantity = value;
        }
    }

    get ingredientId(){
        return this._ingredientId;
    }

    set ingredientId(value){
        if(value == undefined || typeof value !== "number"){
            throw Error ("Invalid ingredient")
        }else{
            this._ingredientId= value;
        }
    }

    get productId(){
        return this._productId;
    }

    set productId(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid product")
        }else{
            this._productId = value;
        }
    }
    
    toPersistenceObject(){
        return {
            product: this._product,
            ingredientId: this._ingredientId,
            productId: this._productId,   
        }
    }
}