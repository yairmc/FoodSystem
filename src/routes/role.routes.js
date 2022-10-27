import express from "express";
import { roleController } from "../controllers/index.js";
import { validateAddRole, validateDeleteRole, validateGetRoleById, validateUpdateRole } from "../validators/role.validator.js";
const roleRouter = express.Router();

const { addRole, deleteRole, getAllRoles, getRoleById, updateRole } = roleController;
roleRouter.get("/roles", getAllRoles);
roleRouter.post("/roles", validateAddRole(), addRole);
roleRouter.get("/roles/:id", validateGetRoleById(), getRoleById);
roleRouter.delete("/roles/:id", validateDeleteRole(), deleteRole);
roleRouter.put("/roles/:id", validateUpdateRole(), updateRole);

export default roleRouter;