

export class Order{
    constructor(state, orderProduct, table, waiter){
        
        if(typeof state != "string" || state == undefined){
            throw new Error("Invalid state");
        }else{
            this._state = state;
        }

        if(typeof orderProduct != "object" || orderProduct == undefined){
            throw new Error("Invalid list order product");
        }else{
            this._orderProduct = orderProduct;

            let subtotal = 0;
            
            this._orderProduct.forEach(element => {
                subtotal += element._amount;
            });

            this._subtotal = subtotal;

            let total = 0;
            this._orderProduct.forEach(element => {
                total += element._amount * (1 + element._product._taxes);
            });
            this._total = total;
        }



        if(typeof table != "object" || table == undefined){
            throw new Error("Invalid table product");
        }else{
            this._table = table.idTable;
        }

        if(typeof waiter != "object" || waiter == undefined){
            throw new Error("Invalid waiter");
        }else{
            this._waiter = waiter.name;
        }
    }
}