import { Table, Order, User, Ticket, RoleModel, BranchModel, OrderProduct, Product, ProductIngredient, Ingredient } from "./BarrelFile.js"



// Ticket 
Order.hasOne(Ticket, {
    foreignKey: 'orderId'
});
Ticket.belongsTo(Order);

BranchModel.hasOne(Ticket, {
    foreignKey: 'branchId'
});
Ticket.belongsTo(BranchModel);

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
RoleModel.hasOne(User, {
    foreignKey: 'roleId'
});
User.belongsTo(RoleModel);


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
