import {Ingredient, Order, OrderProduct, PreparedDrinks, User, Waiter} from "./entities/BarrelFile/.js"

import {User,Role} from "./models/BarrelFile.js"

// const i1 = new Ingredient("Leche", 10);
// const i2 = new Ingredient("Soda", 4);
// const i3 = new Ingredient("Huevos", 5);
// const i4 = new Ingredient("Harina", 12);

// const w = new Waiter("Manuel", "manuelVzla", "123");

// const ingredients = [i1, i2]

// const p = new PreparedDrinks("Michelada", 60, 20, true, ingredients, 10, 40);
// const p2 = new PreparedDrinks("Cuba", 50, 15, true, ingredients, 10, 20);

// const op = new OrderProduct(p, 2, "Sin cerveza");
// const op2 = new OrderProduct(p2, 1, "Sin tajin");

// const listOp = [op, op2];

// const o = new Order("En espera", listOp, w);

// console.log(o);

// const addNewRole = async () => {
//     const roleAux = await Role.create(
//         {
//             nameRole: "Administrator"
//         }
//     );
//     return roleAux;
// };
const addNewUser = async () => {
    const userAux = await User.create(
        {
            name: "Hector Zapata",
            userName: "DianaLover",
            password: "password",
            idRole: 1
        }
    );
    return userAux;
};

const main = async()=>{
    try {
       const role = await addNewUser(); 
    } catch (error) {
        
    }
}

main();

