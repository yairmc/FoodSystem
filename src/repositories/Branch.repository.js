import { Branch }  from '../entities/Branch.js';
import { BranchModel } from '../models/Branch.model.js';

export class BranchRepository {

    async createBranch(branch) {
        const newBranch = await BranchModel.create(branch);   
        return new Branch(newBranch.sucursalName, newBranch.sucursalAddress).toPersistenceObject();
    }

    async updateBranch (id, branch) {
        const branchUpdated = await BranchModel.update({sucursalName:branch.sucursalName, sucursalAddress:branch.sucursalAddress},{
            where: {
                id 
            }
        });
        return branchUpdated;
    }

    async deleteBranch(id) {
        const branchDeleted = await BranchModel.destroy({
            where: {
                id
            }
        });
        return branchDeleted;
    }

    async getBranchById(id) {
        const branch = await BranchModel.findOne({
            where: {
                id
            }
        });
        return branch;
    }

    async getAllBranches() {
        const allBranchs = await BranchModel.findAll({
            branch: ['id'],
            attributes: ['sucursalName', 'sucursalAddress']
        });
        return allBranchs;
    }
}


