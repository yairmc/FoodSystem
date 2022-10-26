

export class Order {
    constructor(state, total, subTotal, userId, tableId) {

        if (typeof state != "number" || state == undefined) {
            throw new Error("Invalid state");
        } else {
            this._state = state;
            this._subTotal = subTotal;
            this._total = total;
        }



        // if(typeof orderProduct != "object" || orderProduct == undefined){
        //throw new Error("Invalid list order product");
        //  }else{
        //   this._orderProduct = orderProduct;

        //  let subtotal = 0;

        //  this._orderProduct.forEach(element => {
        //     subtotal += element._amount;
        //  });

        //  this._subtotal = subtotal;

        //  let total = 0;
        //  this._orderProduct.forEach(element => {
        //      total += element._amount * (1 + element._product._taxes);
        //   });
        //   this._total = total;
        //  }

        if (typeof tableId != "number" || tableId == undefined) {
            throw new Error("Invalid table product");
        } else {
            this._tableId = tableId;
        }

        if (typeof userId != "number" || userId == undefined) {
            throw new Error("Invalid waiter");
        } else {
            this._userId = userId;
        }
    }

    toPersistenceObject() {
        return {
            state: this._state,
            total: this._total,
            subTotal: this._subTotal,
            userId: this._userId,
            tableId: this._tableId
        }
    }
}