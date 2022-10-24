import { Ticket } from '../entities/Ticket,js';
import { TicketModel } from '../models/Ticket.model.js';

export class TicketRepository {

    async createTicket (ticket) {
       const newTicket = await TicketModel.create(ticket);
       return new Ticket(newTicket.paymentAmount, newTicket.paymentReturn, newTicket.orderId, newTicket.branchId, newTicket.date);
    }

    async updateTicket (id, ticket) {
        const ticketUpdated = await TicketModel.update({paymentAmount:ticket.paymentAmount, paymentReturn:ticket.paymentReturn, orderId:ticket.orderId, branchId:ticket.branchId, date:ticket.date}, {
            where: {
                id
            }
        });
        return ticketUpdated;
    }

    async deleteTicket(id) {
        const ticketDeleted = await TicketModel.destroy({
            where: {
                id
            }
        });
        return ticketDeleted;
    }

    async getTicketById(id) {
        const ticket = await TicketModel.findOne({
            where: {
                id
            }
        });
        return ticket;
    }

    async getTicketByOrder(id) {
        const ticket = await TicketModel.findOne({
            where: {
                orderId : id
            }
        });
        return ticket;
    }

    async getAllTickets() {
        const tickets = await TableModel.findAll({
            ticket: ['id'],
            attributes: ['paymentAmount', 'paymentReturn', 'orderId', 'branchId', 'date']

        });
        return tickets;
    }
}