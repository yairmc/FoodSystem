import { User }  from '../entities/User.js';
import { UserModel } from '../models/User.model.js';

export class UserRepository {

    async create (user) {
        const u = user.toPersistenceObject();
        const result = await UserModel.create(u);
        return new User(result.name, result.userName, result.password, result.roleId);
    }

    async update (id,user) {
        if (id === undefined){

            throw new Error('Undefined ID')
        }

        const result = await UserModel.update({name:user.name, userName:user.userName, password:user.password, roleId:user.roleId}, {
            where: {
                id: id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await UserModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await UserModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await UserModel.findAll({
            order: ['id'],
            attributes: ['name', 'userName', 'roleId']

        });
        return JSON.stringify(result);
    }
}