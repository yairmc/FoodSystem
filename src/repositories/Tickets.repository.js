import { Ticket } from '../entities/Ticket.js';
import { TicketModel } from '../models/Ticket.model.js';

export default class TicketRepository {

    async createTicket(ticket) {
        const {dataValues} = await TicketModel.create(ticket);
        const newTicket = dataValues;
        return new Ticket(newTicket.paymentAmount, newTicket.paymentReturn, newTicket.orderId, newTicket.branchId, newTicket.date);
    }

    async updateTicket(id, ticket) {
        const ticketUpdated = await TicketModel.update({ paymentAmount: ticket.paymentAmount, paymentReturn: ticket.paymentReturn, orderId: ticket.orderId, branchId: ticket.branchId, date: ticket.date }, {
            where: { id }
        });
        return ticketUpdated;
    }

    async deleteTicket(id) {
        const ticketDeleted = await TicketModel.destroy({
            where: { id }
        });
        return ticketDeleted;
    }

    async getTicketById(id) {
        const ticket = await TicketModel.findOne({
            where: { id }
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
        const tickets = await TicketModel.findAll({
            order: ['id'],
            attributes: ['id', 'paymentAmount', 'paymentReturn', 'orderId', 'branchId', 'date']

        });
        return tickets.map(iterator => iterator.dataValues);
    }
}