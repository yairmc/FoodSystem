import suspertest from "supertest";
import { app } from "../../src/main";
import { authRouter } from "../../src/routes/auth.routes";
import { generateAccessToken } from '../../src/controllers/authController'
import supertest from "supertest";
import { expect } from "@jest/globals";

describe('FS-8 Test the authentication paths', () => {
    const request = supertest(app)

    const user = {
        id: "12",
        userName: "yair"
    }
    const token = generateAccessToken(user);
    test('Validate that the user exists and the token is returned.', async () => {
        const { body } = await request.post("/auth").send(user)
        expect(body.accessToken).toBe(token)
        
    })

    // test('Validate that it returns an error if the user trying to authenticate does not exist', async () => { second })

    // test('Validate that it returns an error in case of being an invalid user.', async () => { second })

    // test('Validate that the token is correct.', async () => { second })

})