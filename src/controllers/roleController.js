import { RoleRepository } from "../repositories/Roles.repository.js";
const roleRepository = new RoleRepository();

const addRole = async (req, res) => {
    try {
        const roleAux = await roleRepository.create(req.body)
        res.status(200).json(roleAux);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error while adding role" });
    }
};

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleRepository.findAll({});
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all roles" });
    }
};

const getRoleById = async (req, res) => {
    try {
        const { id } = req.params;
        const role = await roleRepository.findOneByID(id);
        if (!user) return res.status(404).json({ msg: "This role doesn't exist" });
        res.status(200).json(role);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying role" });
    }
};

const updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const roleAux = await roleRepository.update(id, req.body);
        if (roleAux[0] === 0) {
            return res.status(404).json({ msg: "This role wasn't updated" });
        }
        res.status(200).json({ msg: "Role updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating role" });
    }
};

const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteRole = await roleRepository.delete(id);
        if (!deleteRole) {
            return res.status(404).json({ msg: "This role wasn't deleted" });
        }
        res.status(200).json({ msg: "Role deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting role" });
    }
};

export { addRole, updateRole, getAllRoles, getRoleById, deleteRole };