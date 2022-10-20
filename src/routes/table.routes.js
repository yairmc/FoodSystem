import express from 'express';
import { addTable, updateTable, deleteTable, getTableById, getTableByNumber, getAllTables } from '../controllers/tableController';

const tableRouter = express.Router();

tableRouter.get('/tables', getAllTables)
tableRouter.post('/tables', addTable)
tableRouter.get('/tables/:id', getTableById)
tableRouter.get('/tables/:number', getTableByNumber)
tableRouter.delete('tables/:id', deleteTable)
tableRouter.put('tables/:id', updateTable)

export default tableRouter;