import { app } from "../../src/main";
import supertest from "supertest";
import { expect } from '@jest/globals'
import { request } from "express";
describe("Testing tableController", () => {

    const request = supertest(app);
    const table = {
        number: 10,
        availability: true,
        dinersNumber: 2
    }
    test('must add new Table', async () => {
        console.log(table);
        const { body } = await request.post("/tables").send(table)
        expect(body.number).toBe(table.number);
        expect(body.availability).toBe(table.availability);
        expect(body.dinersNumber).toBe(table.dinersNumber);
    });

    test('must throw an error when we dont created a table thit a empty data', async () => {
        const tableFail = {
            number: "hola",
            availability: true,
            dinerNumber: 2
        };
        const { body } = await request.post("/tables").send(tableFail);
        expect(body.errors[0].msg).toBe("Number must be a number");

    })

    test('must return all tables', async () => {
        const { body } = await request.get("/tables");
        expect(body.length).toBeGreaterThan(1);
    })

    test('must return table by id', async () => {
        const result = await request.get('/tables');
        const tableId = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/tables/${tableId}`);

        expect(body.number).toBe(table.number);
        expect(body.availability).toBe(table.availability);
        expect(body.dinersNumber).toBe(table.dinersNumber);

    })

    test('must return table by number', async () => {
        const result = await request.get("/tables");
        const tableNumber = result.body[result.body.length - 1].number;
        const { body } = await request.get(`/tables/number?number=${tableNumber}`);

        expect(body.number).toBe(table.number);
        expect(body.availability).toBe(table.availability);
        expect(body.dinersNumber).toBe(table.dinersNumber);
    })

    test("must throw an error if the table doesn't exist", async () => {
        const { body } = await request.get(`/tables/${-1}`);
        expect(body.msg).toBe("This table doesn't exist");
    });

    test('must updated table by id', async () => {
        const result = await request.get("/tables");
        const lastTable = result.body[result.body.length - 1]
        const newTableInfo = {
            number:41,
            availability:false,
            dinersNumber: 20
        }
        const { body } = await request.put(`/tables/${lastTable.id}`).send(newTableInfo)
        expect(body.msg).toBe("Table updated")
    })

    test('must deleted table by id', async () => {
        const result = await request.get("/tables");
        const lastTableId = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/tables/${lastTableId}`);
        expect(body.msg).toBe("Table deleted");
    })
})