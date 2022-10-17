import { User as ModelUser } from "../models/User.js";
import { Administrator, Waiter, Kitchen } from "../entities/BarrelFile.js";

const addUser = async (user) => {
    try {
        const { _name, _username, _password, _idRole } = user;
        const userAux = await ModelUser.create(
            {
                name: _name,
                userName: _username,
                password: _password,
                roleId: _idRole,
            }
        );
        return castUser(userAux);
    } catch (error) {
        return error;
    }
};

const getAllUsers = async () => {
    try {
        const users = await ModelUser.findAll({})
        return users;
    } catch (error) {
        return error;
    }
};

const getUserById = async (id) => {
    try {
        let userAux;
        const user = await ModelUser.findOne({
            where: { id }
        });
        if (!user) return new Error("Error, this user doesn't exist");
        userAux = castUser(user);
        return userAux;
    } catch (error) {
        return error;
    }
};

const getUserByUsername = async (userName) => {
    try {
        let userAux;
        const user = await ModelUser.findOne({
            where: { userName }
        });
        if (!user) return new Error("Error, this user doesn't exist");
        userAux = castUser(user);
        return userAux;
    } catch (error) {
        return error;
    }
};

const updateUser = async (user, id) => {
    try {
        const { _name, _username, _password, _idRole } = user;
        const userAux = await ModelUser.update(
            {
                name: _name,
                userName: _username,
                password: _password,
                roleId: Number(_idRole),
            }, {
            where: {
                id
            }
        });
        if (userAux[0] === 0) {
            return { msg: "User wasn't updated" };
        } else {
            return { msg: "User was updated" };
        }
    } catch (error) {
        return error;
    }
};

const deleteUser = async (id) => {
    try {
        const deleteUser = await ModelUser.destroy(
            {
                where: { id }
            }
        );
        if (deleteUser) {
            return { msg: "User was deleted" };
        } else {
            return { msg: "User wasn't deleted" };
        }
    } catch (error) {
        return error;
    }
};

const castUser = (userResult) => {
    const user= userResult.dataValues;
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