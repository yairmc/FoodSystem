import { Product } from "../../src/entities/BarrelFile.js";
import { addProduct, getAllProducts, getProductById, getProductByName, updateProduct, deleteProduct } from "../../src/controllers/prodController.js";
import { v4 as uuid } from "uuid";
import { expect } from "@jest/globals";

describe('Product controller test', () => {
    test('Must add new product', async () => {
        const prodAux = new Product(
            `prod-${uuid()}`,
            20,
            15,
            true,
            5,
            "packagedProduct",
            10
        );

        const prodAdded = await addProduct(prodAux);
        expect(prodAdded.name).toBe(prodAux.name);
    });
    test('Must return all products', async () => {
        const allProducts = await getAllProducts();
        expect(allProducts.length).toBeGreaterThan(1);
    });
    test('Must return a product by Id', async () => {
        const idAux = 1;
        const product = await getProductById(idAux);
        expect(product.id).toBe(idAux);
    });
    test('Must return a product by name', async () => {
        const name = "prod-78577c25-e671-4ed8-adff-12cea431a485";
        const product = await getProductByName(name);
        expect(product.name).toBe(name);
    });
    test('Must updtaed a product', async () => {
        const prodAux = new Product(
            `prod-${uuid()}`,
            2,
            1,
            true,
            50,
            "packagedProduct",
            100
        );
        const prodUpdated = await updateProduct(2, prodAux);
        expect(prodUpdated[0]).toBeGreaterThan(0);
    });
    test('Must delete a product', async () => {
        const products = await getAllProducts();
        const prodDeleted = await deleteProduct(products[products.length - 1].id);
        expect(prodDeleted).toBeGreaterThan(0);
    });
});