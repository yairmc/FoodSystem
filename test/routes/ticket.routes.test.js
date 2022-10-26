import { app } from "../../src/main"
import supertest from "supertest"
import { expect } from "@jest/globals"



describe('Testing ticketController', () => {

    const request = supertest(app);
    const ticket = {
        paymentAmount: Math.floor(Math.random() * 300),
        paymentReturn: Math.floor(Math.random() * 300),
        orderId: 5,
        branchId: 2
    }
    test('must add new Ticket', async () => {
        const { body } = await request.post("/tickets").send(ticket);
        expect(body.state).toBe(ticket.state);
        expect(body.total).toBe(ticket.total);
        expect(body.subTotal).toBe(ticket.subTotal);
        expect(body.userId).toBe(ticket.userId);
        expect(body.tableId).toBe(ticket.tableId);

    })

    test('must retur table by id', async () => {
        const result = await request.get("/tickets")
        const lastTicket = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/tickets/${lastTicket}`)
        expect(body.paymentAmount).toBe(ticket.paymentAmount)
        expect(body.paymentReturn).toBe(ticket.paymentReturn)
        expect(body.orderId).toBe(ticket.orderId)
        expect(body.branchId).toBe(ticket.branchId)

    })

    // test('must retur table by orderId', async () => {
    //     const result = await request.get("/tickets")
    //     const lastTicket = result.body[result.body.length - 1].orderId;
    //     console.log(lastTicket);
    //     const { body } = await request.get(`/tickets/orderId?orderId=${lastTicket}`)
    //     expect(body.paymentAmount).toBe(ticket.paymentAmount)
    //     expect(body.paymentReturn).toBe(ticket.paymentReturn)
    //     expect(body.orderId).toBe(ticket.orderId)
    //     expect(body.branchId).toBe(ticket.branchId)

    // })

    test('must update Ticket by id', async () => {
        const newTicket = {
            paymentAmount: 5,
            paymentReturn: Math.floor(Math.random() * 300),
            orderId: 4,
            branchId: 2
        }

        const result = await request.get("/tickets");
        const lastTicket = result.body[result.body.length - 1];
        const { body } = await request.put(`/tickets/${lastTicket.id}`).send(newTicket);
        console.log(body);
        expect(body.msg).toBe("Ticket updated")
    })

    test('must deleted ticket by id', async () => {
        const result = await request.get("/tickets");
        const lastTicket = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/tickets/${lastTicket}`);
        expect(body.msg).toBe("Ticket deleted");
    })


})