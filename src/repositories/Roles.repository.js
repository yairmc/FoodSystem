import { Role } from '../entities/Role.js';
import { RoleModel } from '../models/Role.model.js';

export default class RoleRepository {

    async createRole(role) {
        const roleCreated = await RoleModel.create(role);
        return new Role(roleCreated.name);
    }

    async updateRole(id, role) {
        const roleUpdated = await RoleModel.update({ name: role.name }, {
            where: {
                id
            }
        });
        return roleUpdated;
    }

    async deleteRole(id) {
        const roleDeleted = await RoleModel.destroy({
            where: {
                id
            }
        });
        return roleDeleted;
    }

    async getRoleById(id) {
        const role = await RoleModel.findOne({
            where: {
                id
            }
        });
        return role;
    }

    async getAllRoles() {
        const allRoles = await RoleModel.findAll({
            order: ['id'],
            attributes: ['id', 'name']
        });
        return allRoles;
    }
}


