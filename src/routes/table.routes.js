import express from 'express';

const tableRouter = express.Router();

tableRouter.get('/tables')
tableRouter.post('/tables')
tableRouter.get('/tables/:id')
tableRouter.get('/tables/:number')
tableRouter.delete('tables/:id')
tableRouter.put('tables/:id')

export default tableRouter;