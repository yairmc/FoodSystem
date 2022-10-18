import express from "express";
import { roleController } from "../controllers/index.js";
const roleRouter = express.Router();

const { addRole, deleteRole, getAllRoles, getRoleById, updateRole } = roleController;
roleRouter.get("/roles", getAllRoles);
roleRouter.post("/roles", addRole);
roleRouter.get("/roles/:id", getRoleById);
roleRouter.delete("/roles/:id", deleteRole);
roleRouter.put("/roles/:id", updateRole);

export default roleRouter;