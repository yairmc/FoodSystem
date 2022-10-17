import { Table  }from '../entities/Table.js';
import { TableModel} from '../models/Table.model.js';

export class TableRepository {

    async create (table) {
        const t = table.toPersistenceObject();
        const result = await TableModel.create(t);
        return new Table(result.number, result.availability, result.dinersNumber);
    }

    async update (id, table) {
        if (id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await TableModel.update({number:table.number, availability:table.availability, dinersNumber:table.dinersNumber}, {
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await TableModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await TableModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await TableModel.findAll({
            order: ['id'],
            attributes: ['number', 'availability', 'dinersNumber']

        });
        return JSON.stringify(result);
    }
}