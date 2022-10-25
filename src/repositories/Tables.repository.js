import { Table } from './../entities/BarrelFile.js'
import { TableModel } from '../models/Table.model.js';

export default class TableRepository {

    async createTable(table) {
        const tableCreated = await TableModel.create(table);
        const { number, availability, dinersNumber } = tableCreated;
        return new Table(number, availability, dinersNumber);
    }

    async updateTable(id, table) {
        const { number, availability, dinersNumber } = table;
        const tableUpdated = await TableModel.update({ number: number, availability: availability, dinersNumber: dinersNumber }, {
            where: {
                id
            }
        });
        return tableUpdated;
    }

    async deleteTable(id) {
        const tableDeleted = await TableModel.destroy({
            where: {
                id
            }
        });
        return tableDeleted;
    }

    async getTableById(id) {
        const table = await TableModel.findOne({
            where: {
                id
            }
        });
        return table;
    }

    async getTableByNumber(number) {
        const table = await TableModel.findOne({
            where: {
                number
            }
        });
        return table;
    }

    async getAllTables() {
        const allTables = await TableModel.findAll({
            order: ['id'],
            attributes: ["id",'number', 'availability', 'dinersNumber']

        });
        return allTables.map(iterator => iterator.dataValues);
    }
}