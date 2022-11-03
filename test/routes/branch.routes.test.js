import supertest from "supertest";
import { app } from "../../src/main";
import { expect } from "@jest/globals";

describe('Testing branchController', () => {

    const request = supertest(app);
    const branch = {
        branchName: 'Pollo Loco',
        branchAddress: 'Calle Jalisco'
    }

    test('must add new branch', () => { })
    test('must return branch by id', () => { })
    test('must return all branch', () => { })
    test('must updated branch by id', () => { })
    test('must deleted order by id', () => { })
})