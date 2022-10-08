export class Product {
    constructor(category, name, basePrice, makingPrice, availability, ingredients, tax) {
        if (new.target === Product) {
            throw new Error("This is an abstract class");
        }
    }
}