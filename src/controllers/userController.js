import { UserModel as ModelUser } from "../models/User.model.js";
import { Administrator, Waiter, Kitchen } from "../entities/BarrelFile.js";
import { UserRepository } from "../repositories/Users.repository.js";
const userRepository = new UserRepository();

const addUser = async (req, res) => {
    try {
        const userAux = await userRepository.create(req.body)
        res.status(200).json(userAux);
    } catch (error) {
        res.status(500).json({ msg: "Error while adding user" });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await ModelUser.findAll({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: "Error while querying all users" });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        let userAux;
        const user = await userRepository.findOneByID(id);
        if (!user) return res.status(404).json({ msg: "This user doesn't exist" });
        userAux = castUser(user);
        res.status(200).json(userAux);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying user" });
    }
};

const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.query;
        let userAux;
        const user = await userRepository.findOneByUsername(username);
        if (!user) return res.status(404).json({ msg: "This user doesn't exist" });
        userAux = castUser(user);
        res.status(200).json(userAux);
    } catch (error) {
        return res.status(500).json({ msg: "Error while querying user by username" });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userAux = await userRepository.update(id, req.body);
        if (userAux[0] === 0) {
            return res.status(404).json({ msg: "This user wasn't updated" });
        }
        res.status(200).json({ msg: "User updated" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while updating user" });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await userRepository.delete(id);
        if (!deleteUser) {
            return res.status(404).json({ msg: "This user wasn't deleted" });
        }
        res.status(200).json({ msg: "User deleted" });
    } catch (error) {
        return res.status(500).json({ msg: "Error while deleting user" });
    }
};

const castUser = (userResult) => {
    const user = userResult.dataValues;
    let userAux;
    if (user.roleId === 1) {
        userAux = new Administrator(user.name, user.userName, user.password, user.roleId);
    } else if (user.roleId === 2) {
        userAux = new Waiter(user.name, user.userName, user.password, user.roleId);
    } else if (user.roleId === 3) {
        userAux = new Kitchen(user.name, user.userName, user.password, user.roleId);
    }
    return userAux;
}

export { addUser, updateUser, getAllUsers, getUserById, getUserByUsername, deleteUser };