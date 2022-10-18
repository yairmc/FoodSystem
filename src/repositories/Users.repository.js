import { User } from '../entities/User.js';
import { UserModel } from '../models/User.model.js';

export class UserRepository {

    async create(user) {
        const result = await UserModel.create(user);
        return new User(result.name, result.userName, result.password, result.roleId).toPersistenceObject();
    }

    async update(id, user) {
        const result = await UserModel.update({ name: user.name, userName: user.userName, password: user.password, roleId: user.roleId }, {
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

    async findOneByID(id) {
        const result = await UserModel.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOneByUsername(username) {
        const result = await UserModel.findOne({
            where: {
                username: username
            }
        });
        return result;
    }

    async findAll() {
        const result = await UserModel.findAll({
            order: ['id'],
            attributes: ['name', 'userName', 'roleId']
        });
        return JSON.stringify(result);
    }
}