
export class Ticket{
    constructor(date, paymentAmount, backAmount, branch){
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

        if(typeof backAmount != "number" || backAmount == undefined){
            throw Error ("Invalid amount back ticket");
        }else{
            this._backAmount = backAmount
        }

        if(typeof branch != "object" || branch == undefined){
            throw Error ("Invalid branch ticket");
        }else{
            this._branch = branch.nombre

        }
    }
}