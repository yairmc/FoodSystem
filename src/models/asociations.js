import { Table, Order, User, Ticket, Role, Branch, OrderProduct, Product, ProductIngredient, Ingredient } from "./BarrelFile.js"



// Ticket 
Order.hasOne(Ticket);
Ticket.belongsTo(Order);
Branch.hasOne(Ticket);
Ticket.belongsTo(Branch);

// Order
User.hasOne(Order);
Order.belongsTo(User);

Table.hasOne(Order);
Order.belongsTo(Table)

// User
Role.hasOne(User, {
    foreingKey: "roleId",
});
User.belongsTo(Role);


// OrderProduct 
Order.hasOne(OrderProduct);
OrderProduct.belongsTo(Order);

Product.hasOne(OrderProduct);
OrderProduct.belongsTo(Product);

// ProductIngredient 

Ingredient.hasOne(ProductIngredient)
ProductIngredient.belongsTo(Ingredient)

Product.hasOne(ProductIngredient);
ProductIngredient.belongsTo(Product)
