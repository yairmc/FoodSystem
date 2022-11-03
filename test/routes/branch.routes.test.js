import supertest from "supertest";
import { app } from "../../src/main";
import { expect } from "@jest/globals";

describe('Testing branchController', () => {

    const request = supertest(app);
    const branch = {
        branchName: 'Pollo J',
        branchAddress: 'Calle Miguel J'
    }

    test('must add new branch', async () => {
        const { body } = await request.post('/branches').send(branch)
        expect(body.branchName).toBe(branch.branchName);
        expect(body.branchAddress).toBe(branch.branchAddress);
    })

    test('must return branch by id', async () => {
        const result = await request.get('/branches');
        const lastBranch = result.body[result.body.length - 1].id;
        const { body } = await request.get(`/branches/${lastBranch}`);
        expect(body.branchName).toBe(branch.branchName);
        expect(body.branchAddress).toBe(branch.branchAddress);
    })

    test('must return all branch', async () => {
        const branches = await request.get('/branches');
        expect(branches.body.length).toBeGreaterThan(1);
    })

    test('must updated branch by id', async () => {
        const branch2 = {
            branchName: 'Pollo h',
            branchAddress: 'Calle Miguel h'
        }
        const result = await request.get('/branches');
        const lastBranch = result.body[result.body.length - 1].id;
        const { body } = await request.put(`/branches/${lastBranch}`).send(branch2);

        expect(body.msg).toBe('Branch updated');
    })

    test('must deleted order by id', async () => {
        const result = await request.get('/branches');
        const lastBranch = result.body[result.body.length - 1].id;
        const { body } = await request.delete(`/branches/${lastBranch}`);
        expect(body.msg).toBe('Branch deleted')
    })
})