import { Ticket } from '../entities/Ticket,js';
import { TicketModel } from '../models/Ticket.model.js';

export class TicketRepository {

    async create (ticket) {
       const t = ticket.toPersistenceObject();
       const result = await TicketModel.create(t);
       return new Ticket(result.paymentAmount, result.paymentReturn, result.orderId, result.branchId, result.date);
    }

    async update (id, ticket) {
        if (id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await TicketModel.update({paymentAmount:ticket.paymentAmount, paymentReturn:ticket.paymentReturn, orderId:ticket.orderId, branchId:ticket.branchId, date:ticket.date}, {
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await TicketModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await TicketModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await TableModel.findAll({
            ticket: ['id'],
            attributes: ['paymentAmount', 'paymentReturn', 'orderId', 'branchId', 'date']

        });
        return JSON.stringify(result);
    }
}