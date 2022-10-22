import { User } from '../entities/User.js';
import { UserModel } from '../models/User.model.js';

export default class UserRepository {

    async create(user) {
        const userCreated = await UserModel.create(user);
        return new User(userCreated.name, userCreated.userName, userCreated.password, userCreated.roleId).toPersistenceObject();
    }

    async update(id, user) {
        const userUpdated = await UserModel.update({ name: user.name, userName: user.userName, password: user.password, roleId: user.roleId }, {
            where: {
                id
            }
        });
        return userUpdated;
    }

    async delete(id) {
        const userDeleted = await UserModel.destroy({
            where: {
                id
            }
        });
        return userDeleted;
    }

    async findOneByID(id) {
        const user = await UserModel.findOne({
            where: {
                id
            }
        });
        return user;
    }

    async findOneByUsername(username) {
        const user = await UserModel.findOne({
            where: {
                username
            }
        });
        return user;
    }

    async findAll() {
        const allUsers = await UserModel.findAll({
            order: ['id'],
            attributes: ['id', 'name', 'userName', 'roleId']
        });
        return allUsers;
    }
}