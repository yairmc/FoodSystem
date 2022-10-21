import { TableModel } from '../models/Table.model.js';

export class TableRepository {

    async createTable(table) {
        return await TableModel.create(table);
    }

    async updateTable(id, table) {
        return await TableModel.update({ number: table.number, availability: table.availability, dinersNumber: table.dinersNumber }, {
            where: { id: id }
        });
    }

    async deleteTable(id) {
        return await TableModel.destroy({ where: { id } });
    }

    async findOneTable(id) {
        return await TableModel.findOne({ where: { id } });
    }

    async findOneTableNumber(number) {
        return await TableModel.findOne({ where: { number } });
    }

    async findAllTables() {
        return await TableModel.findAll({
            order: ['id'],
            attributes: ['number', 'availability', 'dinersNumber']
        });
    }
}