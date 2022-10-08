
export class Ticket{
    constructor(fecha, montoPago, montoVuelta, sucursal){
       // if(typeof orden != "Orden" || orden == undefined){
           // throw Error ("La orden asignada al ticket es invalida");
      //  }else{
           // this._orden = orden
       // }

        if(typeof fecha != "object" || fecha == undefined){
            throw Error ("La fecha asignada al ticket es invalida");
        }else{
            this._fecha = fecha
        }

        if(typeof montoPago != "number" || montoPago == undefined){
            throw Error ("El monto del pago del ticket es invalido");
        }else{
            this._montoPago = montoPago
        }

        if(typeof montoVuelta != "number" || montoVuelta == undefined){
            throw Error ("El de vuelta del ticket es invalido");
        }else{
            this._montoVuelta= montoVuelta
        }

        if(typeof sucursal != "object" || sucursal == undefined){
            throw Error ("El de vuelta del ticket es invalido");
        }else{
            this.sucursal= sucursal.nombre
        }
    }
}