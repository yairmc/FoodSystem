import express from 'express';
import { addTable, updateTable, deleteTable, getTableById, getTableByNumber, getAllTables } from '../controllers/tableController.js';
import {
    validateAddTable,
    validateUpdateTable,
    validateDeleteTable,
    validateGetTableById,
    validateGetTableByNumber
} from '../validators/table.validator.js'
const tableRouter = express.Router();

tableRouter.get('/tables', getAllTables)
tableRouter.post('/tables', validateAddTable(), addTable)
tableRouter.get('/tables/:id', validateGetTableById(), getTableById)
tableRouter.get('/tables/number', validateGetTableByNumber(), getTableByNumber)
tableRouter.delete('/tables/:id', validateDeleteTable(), deleteTable)
tableRouter.put('/tables/:id', validateUpdateTable(), updateTable)

export default tableRouter;