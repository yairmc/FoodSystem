import express from 'express';
import {
    addTicket,
    updatedTicket,
    deleteTicket,
    getTicketById,
    getAllTickets,

} from'../controllers/ticketController.js'

const ticketRouter = express.Router();


ticketRouter.post('/tickets', addTicket);
ticketRouter.put('/tickets/:id', updatedTicket);
ticketRouter.delete('/tickets/:id', deleteTicket);
// ticketRouter.get('/tickets/fecha', )
// ticketRouter.get('/tickets/order')
ticketRouter.get('/tickets/:id',getTicketById );
ticketRouter.get('/tickets', getAllTickets);

export default ticketRouter;