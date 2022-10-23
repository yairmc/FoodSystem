import express from 'express';
const ticketRouter = express.Router();

ticketRouter.post('/tickets')
ticketRouter.put('/tickets')
ticketRouter.delete('/tickets')
ticketRouter.get('/tickets/fecha', )
ticketRouter.get('/tickets/order')
ticketRouter.get('/tickets/:id', )
ticketRouter.get('/tickets', )

export default ticketRouter;