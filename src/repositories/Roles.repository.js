import { Role }  from '../entities/Role.js';
import { RoleModel } from '../models/Role.model.js';

export class RoleRepository {

    async create (role) {
        const r = role.toPersistenceObject();
        const result = await RoleModel.create(r);   
        return new Role(result.name);
    }

    async update (id, role) {
        if (id == undefined){
            throw new Error('Undefined ID')
        }

        const result = await RoleModel.update({name:role.name},{
            where: {
                id : id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await RoleModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await RoleModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await RoleModel.findAll({
            order: ['id'],
            attributes: ['name']
        });
        return JSON.stringify(result);
    }
}


