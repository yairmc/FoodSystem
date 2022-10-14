import  TicketB  from '../entities/Ticket,js';
import { Ticket } from '../models/Ticket.js';

export class TicketRepository {

    async create (ticket) {
        const result = await Ticket.create(ticket._date, ticket._paymentAmount, ticket._paymentReturn, ticket._sucursal);      
        
        return new TicketB(result.date, result.paymentAmount, result.paymentReturn, result.sucursal);
    }

    async update (ticket) {
        if (ticket.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await Ticket.update(ticket, {
            where: {
                id: ticket.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await Ticket.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await Ticket.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await Ticket.findAll();
        return result.map(() => {
            new TicketB(result.date, result.paymentAmount, result.paymentReturn, result.sucursal);
        });
    }
}