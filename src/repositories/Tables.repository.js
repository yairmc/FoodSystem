import { Table } from '../entities/Table.js';
import { TableModel } from '../models/Table.model.js';

export class TableRepository {

    async createTable(table) {
        const result = await TableModel.create(table);
        return new Table(result.number, result.availability, result.dinersNumber);
    }

    async updateTable(id, table) {
        const result = await TableModel.update({ number: table.number, availability: table.availability, dinersNumber: table.dinersNumber }, {
            where: { id: id }
        });
        return result;
    }

    async deleteTable(id) {
        const result = await TableModel.destroy({
            where: { id }
        });
        return result;
    }

    async findOneTable(id) {
        const result = await TableModel.findOne({
            where: { id }
        });
        return result;
    }

    async findOneTableNumber(number) {
        const result = await TableModel.findOne({
            where: { number }
        });
        return result;
    }

    async findAllTables() {
        const result = await TableModel.findAll({
            order: ['id'],
            attributes: ['number', 'availability', 'dinersNumber']

        });
        return JSON.stringify(result);
    }
}