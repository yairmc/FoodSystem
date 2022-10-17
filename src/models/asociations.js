import { Table, Order, User, Ticket, Role, Branch, OrderProduct, Product, ProductIngredient, Ingredient } from "./BarrelFile.js"



// Ticket 
Order.hasOne(Ticket, {
    foreignKey: 'orderId'
});
Ticket.belongsTo(Order);

Branch.hasOne(Ticket, {
    foreignKey: 'branchId'
});
Ticket.belongsTo(Branch);

// Order
User.hasOne(Order, {
    foreignKey: 'userId'
});
Order.belongsTo(User);

Table.hasOne(Order, {
    foreignKey: 'tableId'
});
Order.belongsTo(Table)

// User
Role.hasOne(User, {
    foreignKey: 'roleId'
});
User.belongsTo(Role);


// OrderProduct 
Order.hasOne(OrderProduct, {
    foreignKey: 'orderId'
});
OrderProduct.belongsTo(Order);

Product.hasOne(OrderProduct, {
    foreignKey: 'productId'
});
OrderProduct.belongsTo(Product);

// ProductIngredient 

Ingredient.hasOne(ProductIngredient, {
    foreignKey: 'ingredientId'
})
ProductIngredient.belongsTo(Ingredient)

Product.hasOne(ProductIngredient, {
    foreignKey: 'productId'
});
ProductIngredient.belongsTo(Product)
