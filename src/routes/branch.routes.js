import express from "express";
import { branchController } from "../controllers/index.js";
const branchRouter = express.Router();
import {
    validateAddNewBranch,
    validateGetBranchById,
    validateGetBranchByBranchName,
    validateDeleteBranchById,
    validateUpdateBranchById
} from "../validators/branch.validator.js";

const {
    addBranch,
    getAllBranches,
    getBranchById,
    getBranchByName,
    updateBranch,
    deleteBranch
} = branchController;

branchRouter.get("/branches", getAllBranches);
branchRouter.post("/branches", validateAddNewBranch(), addBranch);
branchRouter.put("/branches/:id", validateUpdateBranchById(), updateBranch);
branchRouter.delete("/branches/:id", validateDeleteBranchById(), deleteBranch);
branchRouter.get("/branches/branchName", validateGetBranchByBranchName(), getBranchByName);
branchRouter.get("/branches/:id", validateGetBranchById(), getBranchById);

export default branchRouter;