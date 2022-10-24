import express from 'express';
import {
    addTicket,
    updatedTicket,
    deleteTicket,
    getTicketById,
    getTicketByOrder,
    getAllTickets,
    getTicketByPeriod

} from'../controllers/ticketController.js'

const ticketRouter = express.Router();


ticketRouter.post('/tickets', addTicket);
ticketRouter.put('/tickets/:id', updatedTicket);
ticketRouter.delete('/tickets/:id', deleteTicket);
ticketRouter.get('/tickets/orderId',getTicketByOrder )
ticketRouter.get('/tickets/fecha', getTicketByPeriod)
ticketRouter.get('/tickets/:id',getTicketById );

ticketRouter.get('/tickets', getAllTickets);

export default ticketRouter;