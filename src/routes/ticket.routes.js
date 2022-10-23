import express from 'express';
import {
    addTicket,
    updatedTicket,
    deleteTicket,
    getTicketById,
    getAllTickets,

} from'../controllers/ticketController.js'

const ticketRouter = express.Router();


ticketRouter.post('/tickets', addTicket)
ticketRouter.put('/tickets', updatedTicket)
ticketRouter.delete('/tickets', deleteTicket)
// ticketRouter.get('/tickets/fecha', )
// ticketRouter.get('/tickets/order')
ticketRouter.get('/tickets/:id',getTicketById )
ticketRouter.get('/tickets', getAllTickets)

export default ticketRouter;