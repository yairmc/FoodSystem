import supertest from "supertest";
import { v4 as uuid } from "uuid";
import { app } from "../../src/main";
describe('Testing products routes and controllers', () => {
    const request = supertest(app);
    let idNewProd;
    test('Testing POST /products', async () => {
        const name = uuid();
        const newProduct = {
            name: `prod-${name}`,
            basePrice: 500,
            cost: 50,
            availability: true,
            taxes: 450,
            type: "Prepared",
            stock: 100
        };
        const response = await request.post('/products').send(newProduct);
        idNewProd = response.body.id;
        expect(response.body.id).toBe(idNewProd);
        expect(response.body.name).toBe(newProduct.name);
    });
    test('Testing GET /products', async () => {
        const response = await request.get('/products');
        expect(response.body.length).toBeGreaterThan(1);
        expect(response.body.length).toBeGreaterThan(0);
    });

    test("Testing GET /products/:id", async () => {
        const responseGetAll = await request.get("/products");
        const productById = responseGetAll.body[responseGetAll.body.length - 1];
        const response = await request.get(`/products/${productById.id}`);
        const product = response.body;
        expect(product.id).toBe(productById.id);
        expect(product.name).toBe(productById.name);
        expect(product.type).toBe(productById.type);
    });
    
    test("Testing GET /products/:id", async () => {
        const responseGetAll = await request.get("/products");
        const productById = responseGetAll.body[responseGetAll.body.length - 1];
        const response = await request.get(`/products/${productById.id}`);
        const product = response.body;
        expect(product.id).toBe(productById.id);
        expect(product.name).toBe(productById.name);
        expect(product.type).toBe(productById.type);
    });
});
