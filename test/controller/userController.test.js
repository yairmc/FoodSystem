import { app } from "../../src/main";
import supertest from "supertest";
import { v4 as uuid } from "uuid";
import { expect } from "@jest/globals";

describe("Testing userController", () => {
    const request = supertest(app);
    const name = uuid();
    const username = uuid();
    const adminUser = {
        name: `user-${name}`,
        userName: `username-${username}`,
        password: "12345",
        roleId: 1,
    };

    test("This function must add new user", async () => {
        const { body } = await request.post("/users").send(adminUser);
        expect(body.name).toBe(adminUser.name);
        expect(body.userName).toBe(adminUser.userName);
        expect(body.password).toBe(adminUser.password);
        expect(body.roleId).toBe(adminUser.roleId);
    });
    test("This function must throw an error when we dont created a user with username", async () => {
        const adminUserFail = {
            userName: `username-${uuid()}`,
            password: "12345",
            roleId: 1,
        };
        const { body } = await request.post("/users").send(adminUserFail);
        expect(body.msg).toBe("Error while adding user");
    });

    test("This function must throw an error when the username already exist", async () => {
        const adminUserFail = {
            name: adminUser.name,
            userName: adminUser.userName,
            password: "12345",
            roleId: 1,
        };
        const { body } = await request.post("/users").send(adminUserFail);
        expect(body.msg).toBe("Error while adding user");
    });

    test("This function must return all users", async () => {
        const { body } = await request.get("/users");
        expect(body.length).toBeGreaterThan(1);
    });
    test("This function must return user by Id", async () => {
        const result = await request.get("/users");
        const lastUserId = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/users/${lastUserId}`);
        expect(body._name).toBe(adminUser.name);
        expect(body._userName).toBe(adminUser.userName);
        expect(body._password).toBe(adminUser.password);
        expect(body._roleId).toBe(adminUser.roleId);
    });
    test("This function must throw an error if the user id doesn't exist", async () => {
        const { body } = await request.get(`/users/${-1}`);
        expect(body.msg).toBe("This user doesn't exist");
    });
    test("This function must return user by username", async () => {
        const result = await request.get("/users");
        const lastUser = result.body[result.body.length - 1].userName;
        const { body } = await request.get(
            `/users/username?username=${lastUser}`
        );
        expect(body._name).toBe(adminUser.name);
        expect(body._userName).toBe(adminUser.userName);
        expect(body._password).toBe(adminUser.password);
        expect(body._roleId).toBe(adminUser.roleId);
    });
    test("This function must throw an error if the username doesn't exist", async () => {
        const { body } = await request.get(
            `/users/username?username=${"USERNAME_BAD"}`
        );
        expect(body.msg).toBe("This user doesn't exist");
    });

    test("This function must update user by id", async () => {
        const result = await request.get("/users");
        const lastUser = result.body[result.body.length - 1];
        const newUserInfo = {
            password: "newPassword",
        };
        const { body } = await request
            .put(`/users/${lastUser.id}`)
            .send(newUserInfo);
        expect(body.msg).toBe("User updated");
    });
    test("This function must delete user by id", async () => {
        const result = await request.get("/users");
        const lastUserId = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/users/${lastUserId}`);
        expect(body.msg).toBe("User deleted");
    });
});
