import  UserB  from '../entities/User.js';
import { User } from '../models/User.js';

export class UserRepository {

    async create (user) {
        const result = await User.create(user._name, user._username, user._password);      
        
        return new UserB(result.name, result.username, result.password);
    }

    async update (user) {
        if (user.id === undefined){
            throw new Error('Undefined ID')
        }

        const result = await User.update(user, {
            where: {
                id: user.id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await User.delete({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await User.findOne({
            where: {
                id: id
            }
        });
        return result;
    }

    async findAll() {
        const result = await User.findAll();
        return result.map(() => {
            new UserB(result.name, result.username, result.password);
        });
    }
}