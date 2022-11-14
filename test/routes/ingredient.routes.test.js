import supertest from "supertest";
import { app } from "../../src/main";
import { expect } from "@jest/globals";

describe('Testing ingredientController', () => {

    const request = supertest(app);
    const ingredient = {
        name: 'Pan',
        stock: 10
    }

    test('must return all ingredients', async () => {
        const ingredients = await request.get('/ingredients');
        expect(ingredients.body.length).toBeGreaterThan(1);
    })

    test('must add new ingredient', async () => {
        const { body } = await request.post('/ingredients').send(ingredient)
        expect(body.name).toBe(ingredient.name);
        expect(body.stock).toBe(ingredient.stock);
    })

    test('must return ingredient by name', async () => {
        const result = await request.get('/ingredients');
        const lastIngredient = result.body[result.body.length - 1].name;
        const { body } = await request.get(`/ingredients/${lastIngredient}`);
        expect(body.name).toBe(ingredient.name);
        expect(body.stock).toBe(ingredient.stock);
    })

    test('must return ingredient by id', async () => {
        const result = await request.get('/ingredients');
        const lastIngredient = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/ingredients/${lastIngredient}`);
        expect(body.name).toBe(ingredient.name);
        expect(body.stock).toBe(ingredient.stock);
    })

    test('must deleted ingredient by id', async () => {
        const result = await request.get('/ingredients');
        const lastIngredient = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/ingredients/${lastIngredient}`);
        expect(body.msg).toBe('Ingredient deleted')
    })

    test('must updated ingredient by id', async () => {
        const ingredient2 = {
            name: 'Tomates',
            stock: 10
        }
        const result = await request.get('/ingredients');
        const lastIngredient = result.body[result.body.length - 1].id;
        const { body } = await request.put(`/ingredients/${lastIngredient}`).send(ingredient2);

        expect(body.msg).toBe('Ingredient updated');
    })
})