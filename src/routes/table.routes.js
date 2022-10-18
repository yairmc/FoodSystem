import express from 'express';

const tableRouter = express.Router();

tableRouter.get('/tables', (res, req) => { })
tableRouter.post('/tables', (req, res) => { })
tableRouter.get('/tables/:id', (req, res) => { })
tableRouter.delete('tables/:id', (req, res) => { })
tableRouter.put('tables/:id', (req, res) => { })

export default tableRouter;