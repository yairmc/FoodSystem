import {Role, Table, Administrator, User, Ingredient} from "./entities/BarrelFile.js"
import {UserRepository} from "./repositories/Users.repository.js"
import {RoleRepository} from "./repositories/Roles.repository.js"
import {TableRepository} from "./repositories/Tables.repository.js"
import {IngredientRepository} from "./repositories/Ingredient.repository.js"
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
    // return roleAux;
// };

// const addNewUser = async () => {
//    const userAux = await User.create(
//        {
//            name: "Hector Zapata",
//            userName: "HectorZ",
//            password: "password",
//             idRole: 1
//         }
//     );
//     return userAux;
// };
const rR = new RoleRepository();
const uR = new UserRepository();
const tR = new TableRepository();
const iR = new IngredientRepository();

const r = new Role("Mesero");
const i = new Ingredient("Lechuga", 10);
//rR.create(r);
const u = new User("Orlando Camacho","OrliCam","orlando123", 2);
iR.create(i);



const n = async() => {
const m = await iR.findOneByName('cebolla');
 console.log(m);
}

n();


// const main = async()=>{
//     try {
//        const role = await addNewUser(); 
//     } catch (error) {
        
//     }
// }

//main();

