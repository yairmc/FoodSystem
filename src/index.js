import {Ingredient} from "./entities/Ingredient.js"
import {PackagingProduct} from "./entities/PackagingProduct.js"
import {PackagedDessert} from "./entities/PackagedDessert.js"
import {PreparedDessert} from "./entities/PreparedDessert.js"
import {PreparedDrinks} from "./entities/PreparedDrinks.js"
import {OrderProduct} from "./entities/OrderProduct.js"
import { Order } from "./entities/Order.js"
import { Waiter } from "./entities/Waiter.js"

const i1 = new Ingredient("Leche", 10);
const i2 = new Ingredient("Soda", 4);
const i3 = new Ingredient("Huevos", 5);
const i4 = new Ingredient("Harina", 12);

const w = new Waiter("Manuel", "manuelVzla", "123");

const ingredients = [i1, i2]

const p = new PreparedDrinks("Michelada", 60, 20, true, ingredients, 10, 40);
const p2 = new PreparedDrinks("Cuba", 50, 15, true, ingredients, 10, 20);

const op = new OrderProduct(p, 2, "Sin cerveza");
const op2 = new OrderProduct(p2, 1, "Sin tajin");

const listOp = [op, op2];

const o = new Order("En espera", listOp, w);

console.log(o);