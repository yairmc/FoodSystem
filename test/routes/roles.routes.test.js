import supertest from "supertest";
import { app } from "../../src/main";
import { expect } from "@jest/globals";

describe('Testing roleController', () => {

    const request = supertest(app);
    const role = {
        name: 'Waiter',
    }

    test('must return all roles', async () => {
        const roles = await request.get('/roles');
        expect(roles.body.length).toBeGreaterThan(1);
    })


    test('must add new role', async () => {
        const { body } = await request.post('/roles').send(role)
        expect(body.name).toBe(role.name);
    })

    test('must return role by id', async () => {
        const result = await request.get('/roles');
        const lastRole = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/roles/${lastRole}`);
        expect(body.name).toBe(role.name);
    })

    test('must deleted role by id', async () => {
        const result = await request.get('/roles');
        const lastRole = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/roles/${lastRole}`);
        expect(body.msg).toBe('Role deleted')
    })

    test('must updated role by id', async () => {
        const role2 = {
            name: 'Kitchen',
        }
        const result = await request.get('/roles');
        const lastRole = result.body[result.body.length - 1].id;
        const { body } = await request.put(`/roles/${lastRole}`).send(role2);

        expect(body.msg).toBe('Role updated');
    })
})