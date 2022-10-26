import BranchRepository from "../repositories/Branch.repository.js";
const branchRepository = new BranchRepository();

const addBranch = async (req, res) => {
    try {
        const newBranch = await branchRepository.createBranch(req.body);
        res.status(200).json(newBranch);
    } catch (error) {
        res.status(500).json({ msg: "Error while adding branch" });
    }
}


const getAllBranches = async (req, res) => {
    try {
        const allBranches = await branchRepository.getAllBranches();
        res.status(200).json(allBranches);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all branches" });
    }
};

const getBranchById = async (req, res) => {
    try {
        const { id } = req.params;
        const branch = await branchRepository.getBranchById(id);
        if (!branch) return res.status(404).json({ msg: "This branch doesn't exist" });
        res.status(200).json(branch);
    } catch (error) {
        console.log(error);

        return res.status(500).json({ msg: "Error while querying branch" });
    }
};
const getBranchByName = async (req, res) => {
    try {
        const { branchName } = req.query;
        const branch = await branchRepository.getBranchByName(branchName);
        if (!branch) return res.status(404).json({ msg: "This branch doesn't exist" });
        res.status(200).json(branch);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying branch" });
    }
};

const updateBranch = async (req, res) => {
    try {
        const { id } = req.params;
        const branchAux = await branchRepository.updateBranch(id, req.body);
        if (branchAux[0] === 0) {
            return res.status(404).json({ msg: "This brnach wasn't updated" });
        }
        res.status(200).json({ msg: "Branch updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating branch" });
    }
};

const deleteBranch = async (req, res) => {
    try {
        const { id } = req.params;
        const branchDeleted = await branchRepository.deleteBranch(id);
        if (!branchDeleted) {
            return res.status(404).json({ msg: "This branch wasn't deleted" });
        }
        res.status(200).json({ msg: "Branch deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting branch" });
    }
};

export { addBranch, getAllBranches, getBranchById, getBranchByName, updateBranch, deleteBranch };