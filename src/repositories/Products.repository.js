import { Product } from '../entities/BarrelFile.js';
import { ProductModel } from '../models/Product.model.js';

export default class ProductRepository {

    async createProduct(product) {
        const prodCreated = await ProductModel.create(product);
        return new Product(prodCreated.name, prodCreated.basePrice, prodCreated.cost, prodCreated.availability, prodCreated.taxes, prodCreated.type, prodCreated.stock).toPersistenceObject();
    }

    async updateProduct(id, product) {
        const prodUpdated = await ProductModel.update({
            name: product.name,
            basePrice: product.basePrice,
            cost: product.cost,
            availability: product.availability,
            taxes: product.taxes,
            type: product.type,
            stock: product.stock
        }, {
            where: {
                id
            }
        });
        return prodUpdated;
    }

    async deleteProduct(id) {
        const prodDeleted = await ProductModel.destroy({
            where: {
                id
            }
        });
        return prodDeleted;
    }

    async getProductById(id) {
        const product = await ProductModel.findOne({
            where: {
                id
            }
        });
        return product;
    }

    async getProductByName(name) {
        const product = await ProductModel.findOne({
            where: {
                name
            }
        });
        return product;
    };

    async getProductByType(type) {
        const products = await ProductModel.findAll({
            where: {
                type
            }
        });
        return products;
    };

    async getAllProducts() {
        const products = await ProductModel.findAll({
            order: ['id'],
            attributes: ['id', 'name', 'basePrice', 'cost', 'availability', 'taxes', 'type', 'stock']
        });
        return products.map(iterator => iterator.dataValues);
    }
}