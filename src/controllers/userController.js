import { User } from "../entities/User.js";
import { User as ModelUser } from "../models/User.js";

export const addUser = async (user) => {
    try {
        const { name, userName, password, idRole } = user;
        const userAux = await ModelUser.create(
            {
                name,
                userName,
                password,
                idRole
            }
        );
        return userAux;
    } catch (error) {
        return error;
    }
};

export const getAllUsers = async () => {
    try {
        const users = await ModelUser.findAll({})
        return users;
    } catch (error) {
        return error;
    }
};

export const getUserById = async (id) => {
    try {
        let userAux;
        const user = await ModelUser.findOne({
            where: { id }
        });
        if (!user) return new Error("Error, this user doesn't exist");
        userAux = new User(user.name, user.userName, user.password, user.idRole);
        return userAux;
    } catch (error) {
        return error;
    }
};

export const getUserByUsername = async (userName) => {
    try {
        let userAux;
        const user = await ModelUser.findOne({
            where: { userName }
        });
        if (!user) return new Error("Error, this user doesn't exist");
        userAux = new User(user.name, user.userName, user.password, user.idRole);
        return userAux;
    } catch (error) {
        return error;
    }
};

export const updateUser = async (user, id) => {
    try {
        const { name, userName, password, idRole } = user;
        const userAux = await ModelUser.update(
            {
                name,
                userName,
                password,
                idRole
            }, {
            where: { id }
        });
        return userAux;
    } catch (error) {
        return error;
    }
};

export const deleteUser = async (id) => {
    try {
        const deleteUser = await ModelUser.destroy(
            {
                where: { id }
            }
        );
        return deleteUser;
    } catch (error) {
        return error;
    }
};