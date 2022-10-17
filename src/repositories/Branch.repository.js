import { Branch }  from '../entities/Branch.js';
import { BranchModel } from '../models/Branch.model.js';

export class BranchRepository {

    async create (branch) {
        const branchPO = branch.toPersistenceObject();
        const result = await BranchModel.create(branchPO);   
        return new Branch(result.sucursalName, result.sucursalAddress);
    }

    async update (id, branch) {
        if (id == undefined){
            throw new Error('Undefined ID')
        }

        const result = await BranchModel.update({sucursalName:branch.sucursalName, sucursalAddress:branch.sucursalAddress},{
            where: {
                id : id
            }
        });
        return result;
    }

    async delete(id) {
        const result = await BranchModel.destroy({
            where: {
                id: id
            }
        });
        return result;
    }

    async findOne(id) {
        const result = await BranchModel.findOne({
            where: {
                id: id
            }
        });
        return result.toJSON();
    }

    async findAll() {
        const result = await BranchModel.findAll({
            branch: ['id'],
            attributes: ['sucursalName', 'sucursalAddress']
        });
        return JSON.stringify(result);
    }
}


