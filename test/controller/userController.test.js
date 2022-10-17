import { expect } from "@jest/globals";
import { userController } from "../../src/controllers";
import { Administrator } from "../../src/entities/BarrelFile.js";
import { v4 } from "uuid";


describe('Testing userController', () => {
    test('This function must add new user', async () => {
        const adminAux = new Administrator(`user-${v4()}`, `username-${v4()}`, "12345", 1);
        const addUser = await userController.addUser(adminAux);
        expect(addUser._name).toBe(adminAux.name);
        expect(addUser._username).toBe(adminAux.username);
    })
    test('This function must return all users', async () => {
        const users = await userController.getAllUsers();
        expect(users.length > 0).toBe(true);
    })
    test('This function must return user by Id', async () => {
        const users = await userController.getAllUsers();
        const user = await userController.getUserById(users[users.length - 1].id);
        expect(user._name).toBe(users[users.length - 1].name);
    })
    test('This function must return user by username', async () => {
        const users = await userController.getAllUsers();
        const user = await userController.getUserByUsername(users[users.length - 1].userName);
        expect(user._username).toBe(users[users.length - 1].userName);
    })
    test('This function must delete user by id', async () => {
        const users = await userController.getAllUsers();
        const userDeleted = await userController.deleteUser(users[users.length - 1].id);
        expect(userDeleted.msg).toBe("User was deleted");
    })
    test('This function must update user by id', async () => {
        const users = await userController.getAllUsers();
        const adminAux = new Administrator(users[users.length - 1].name, users[users.length - 1].userName, "54321", users[users.length - 1].idRole);
        const userUpdated = await userController.updateUser(adminAux, users[users.length - 1].id);
        expect(userUpdated.msg).toBe("User was updated");
    })
})