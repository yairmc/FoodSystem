import express from "express";
import { branchController } from "../controllers/index.js";
const branchRouter = express.Router();

const {
    addBranch,
    getAllBranches,
    getBranchById,
    getBranchByName,
    updateBranch,
    deleteBranch
} = branchController;

branchRouter.get("/branches", getAllBranches);
branchRouter.post("/branches", addBranch);
branchRouter.put("/branches/:id", updateBranch);
branchRouter.delete("/branches/:id", deleteBranch);
branchRouter.get("/branches/branchName", getBranchByName);
branchRouter.get("/branches/:id", getBranchById);

export default branchRouter;