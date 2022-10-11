import  TableB  from '../entities/Table.js';
import { Table } from '../models/Table.js';

export class TableRepository {

    async create (table) {
        const result = await Table.create(table._idTable, table._availability, table._dinersNumber);      
        
        return new TableB(result.idTable, result.availability, result.dinersNumber);
    }

    async update (table) {
        if (table.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await Table.update(table, {
            where: {
                id: table.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await Table.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await Table.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await Table.findAll();
        return result.map(() => {
            new TableB(result.idTable, result.availability, result.dinersNumber);
        });
    }
}