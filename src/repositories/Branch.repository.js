import { Branch } from '../entities/Branch.js';
import { BranchModel } from '../models/Branch.model.js';

export default class BranchRepository {

    async createBranch(branch) {
        const newBranch = await BranchModel.create(branch);
        return new Branch(newBranch.branchName, newBranch.branchAddress).toPersistenceObject();
    }

    async updateBranch(id, branch) {
        const branchUpdated = await BranchModel.update({ branchName: branch.branchName, branchAddress: branch.branchAddress }, {
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

    async getBranchByName(branchName) {
        const branch = await BranchModel.findOne({
            where: {
                branchName
            }
        });
        return branch;
    }

    async getAllBranches() {
        const allBranchs = await BranchModel.findAll({
            branch: ['id'],
            attributes: ['id', 'branchName', 'branchAddress']
        });
        return allBranchs;
    }
}


