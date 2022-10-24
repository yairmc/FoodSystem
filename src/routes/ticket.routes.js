import express from 'express';
import {
    addTicket,
    updatedTicket,
    deleteTicket,
    getTicketById,
    getTicketByOrder,
    getAllTickets,
    getTicketByPeriod

} from '../controllers/ticketController.js'
import { validateAddTicket, validateDeleteTicket, validateGetTableByPeriod, validateGetTicketById, validateGetTicketByOrder, validateUpdateTicket } from '../validators/ticket.validator.js';

const ticketRouter = express.Router();


ticketRouter.post('/tickets', validateAddTicket(), addTicket);
ticketRouter.put('/tickets/:id', validateUpdateTicket(), updatedTicket);
ticketRouter.delete('/tickets/:id', validateDeleteTicket(), deleteTicket);
ticketRouter.get('/tickets/orderId', validateGetTicketByOrder(), getTicketByOrder)
ticketRouter.get('/tickets/fecha', validateGetTableByPeriod(), getTicketByPeriod)
ticketRouter.get('/tickets/:id',validateGetTicketById(), getTicketById);

ticketRouter.get('/tickets', getAllTickets);

export default ticketRouter;