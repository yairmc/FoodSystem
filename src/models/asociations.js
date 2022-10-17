import { TableModel, OrderModel, UserModel, TicketModel, RoleModel, BranchModel, OrderProductModel, ProductModel, ProductIngredientModel, IngredientModel } from "./BarrelFile.js"



// Ticket 
OrderModel.hasOne(TicketModel, {
    foreignKey: 'orderId'
});
TicketModel.belongsTo(OrderModel);

BranchModel.hasOne(TicketModel, {
    foreignKey: 'branchId'
});
TicketModel.belongsTo(BranchModel);

// OrderModel
UserModel.hasOne(OrderModel, {
    foreignKey: 'userId'
});
OrderModel.belongsTo(UserModel);

TableModel.hasOne(OrderModel, {
    foreignKey: 'tableId'
});
OrderModel.belongsTo(TableModel)

// UserModel
RoleModel.hasOne(UserModel, {
    foreignKey: 'roleId'
});
UserModel.belongsTo(RoleModel);


// OrderProductModel 
OrderModel.hasOne(OrderProductModel, {
    foreignKey: 'orderId'
});
OrderProductModel.belongsTo(OrderModel);

ProductModel.hasOne(OrderProductModel, {
    foreignKey: 'productId'
});
OrderProductModel.belongsTo(ProductModel);

// ProductIngredientModel 

IngredientModel.hasOne(ProductIngredientModel, {
    foreignKey: 'ingredientId'
})
ProductIngredientModel.belongsTo(IngredientModel)

ProductModel.hasOne(ProductIngredientModel, {
    foreignKey: 'productId'
});
ProductIngredientModel.belongsTo(ProductModel)
