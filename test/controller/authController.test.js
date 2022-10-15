import { generateAccessToken } from "../../src/controllers/authController";

describe('Testing in authController.js ', () => {

    const user = {
        id: "12",
        userName: "yair"
    }
    const token = generateAccessToken(user);

    test('Return a valid token', () => {
        try {
            expect(token).toEqual(generateAccessToken(user));
        } catch (error) {
            expect(error).toBeInstanceOf(error)
        }
    })
})