import { User } from './../entities/BarrelFile.js'
import { UserModel } from '../models/User.model.js';
import {hashSync} from "bcrypt";
export default class UserRepository {

    async createUser(user) {
        user.password = await hashSync(user.password,10);
        const userCreated = await UserModel.create(user);
        return new User(userCreated.name, userCreated.userName, userCreated.password, userCreated.roleId).toPersistenceObject();
    }

    async updateUser(id, user) {
        const userUpdated = await UserModel.update({ name: user.name, userName: user.userName, password: user.password, roleId: user.roleId }, {
            where: {
                id
            }
        });
        return userUpdated;
    }

    async deleteUser(id) {
        const userDeleted = await UserModel.destroy({
            where: {
                id
            }
        });
        return userDeleted;
    }

    async getUserById(id) {
        const user = await UserModel.findOne({
            where: {
                id
            }
        });
        return user;
    }

    async getUserByUsername(username) {
        const user = await UserModel.findOne({
            where: {
                username
            }
        });
        return user;
    }

    async getAllUsers() {
        const allUsers = await UserModel.findAll({
            order: ['id'],
            attributes: ['id', 'name', 'userName', 'roleId']
        });
        return allUsers;
    }
}