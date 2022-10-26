import supertest from "supertest"
import { app } from "../../src/main";
import { expect } from '@jest/globals'


describe('Testing orderController', () => {

    const request = supertest(app);
    const order = {
        state: 1,
        total: Math.floor(Math.random() * 200),
        subTotal: Math.floor(Math.random() * 200),
        userId: 7,
        tableId: 11
    }
    test('must add new order', async () => {
        const { body } = await request.post("/orders").send(order)
        expect(body.state).toBe(order.state);
        expect(body.total).toBe(order.total);
        expect(body.subTotal).toBe(order.subTotal);
        expect(body.userId).toBe(order.userId);
        expect(body.tableId).toBe(order.tableId);
    })
    test('must return order by id', async () => {
        const result = await request.get("/orders");
        const lastOrder = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/orders/${lastOrder}`)
        expect(body.state).toBe(order.state);
        expect(body.total).toBe(order.total);
        expect(body.subTotal).toBe(order.subTotal);
        expect(body.userId).toBe(order.userId);
        expect(body.tableId).toBe(order.tableId);

    })

    test('must updated order by id',async () => { 
        const newOrder = {
            state: 1,
            total: 1.11,
            subTotal: 1.11,
            userId: 7,
            tableId: 11
        }

        const result = await request.get("/orders");
        const lastOrder = result.body[result.body.length - 1].id;
        const { body } = await request.put(`/orders/${lastOrder}`).send(newOrder)
        expect(body.msg).toBe("Order updated")
     })

     test('must deleted order by ticket',async () => { 
        const result = await request.get("/orders");
        const lastOrder = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/orders/${lastOrder}`)
        expect(body.msg).toBe("Order deleted")
      })
})