import { Product } from '../entities/Product.js';
import { ProductModel } from '../models/Product.model.js';

export default class ProductRepository {

    async create(product) {
        const productAux = new product.toPersistenceObject();
        const prodCreated = await ProductModel.create(productAux);
        return new Product(prodCreated.name, prodCreated.basePrice, prodCreated.cost, prodCreated.availability, prodCreated.taxes, prodCreated.type, prodCreated.stock);
    }

    async update(id, product) {
        const prodUpdated = await ProductModel.update({ name: product.name, basePrice: product.basePrice, cost: product.cost, availability: product.availability, taxes: product.taxes, type: product.typem, stock: product.stock }, {
            where: {
                id
            }
        });
        return prodUpdated;
    }

    async delete(id) {
        const prodDeleted = await ProductModel.destroy({
            where: {
                id
            }
        });
        return prodDeleted;
    }

    async findOne(id) {
        const product = await ProductModel.findOne({
            where: {
                id
            }
        });
        return product;
    }

    async findAll() {
        const products = await RoleModel.findAll({
            order: ['id'],
            attributes: ['name', 'basePrice', 'cost', 'availability', 'taxes', 'type', 'stock']
        });
        return products;
    }
}