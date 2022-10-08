export class Producto {
    constructor(categoria, nombre, precioBase, costoFabricacion, disponibilidad, ingredientes, impuesto) {
        if (new.target === Producto) {
            throw new Error("Esta es una clase abstracta");
        }
    }
}