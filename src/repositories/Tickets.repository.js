import { Ticket } from '../entities/Ticket.js';
import { TicketModel } from '../models/Ticket.model.js';
import {Op} from 'sequelize';

export default class TicketRepository {

    async createTicket(ticket) {
        const { dataValues } = await TicketModel.create(ticket);
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

    async getTicketByOrder(orderId) {
        const ticket = await TicketModel.findAll({
            where: { orderId }
        });
        return ticket;
    }

    async getTicketByPeriod(desde, hasta) {
        const tickets = await TicketModel.findAll({
            where: {
                date:
                {
                    [Op.between]: [desde, hasta]
                }
            }
        });
        return tickets.map(iterator => iterator.dataValues);

    }

    async getAllTickets() {
        const tickets = await TicketModel.findAll({
            order: ['id'],
            attributes: ['id', 'paymentAmount', 'paymentReturn', 'orderId', 'branchId', 'date']

        });
        return tickets.map(iterator => iterator.dataValues);
    }
}