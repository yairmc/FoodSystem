import { app } from "../../src/main";
import supertest from "supertest";
import { expect } from "@jest/globals";

describe("FS-8 Test the authentication paths", () => {
    const request = supertest(app);

    const user = {
        userName: "Akuasnin",
        password: "1234567890",
    };

    const invalidUser = {
        userName: "",
        password: "fooooooobaaar",
    };

    const badUser = {
        userName: "Bruh",
        password: "100000000000",
    };

    test("Validate that the user exists and the token is returned.", async () => {
        const {
            body: tokenResponse,
            status: statusResponse
        } = await request.post("/auth").send(user);
        expect(tokenResponse.token).toBeDefined()
        expect(tokenResponse.msg).toBeUndefined()
        expect(statusResponse).toBe(200)
    });

    test(
        "Validate that it returns an error if the user trying to authenticate does not exist", async () => {
        const {
            body: tokenResponseBad,
            status: statusResponseBad
        } = await request.post("/auth").send(badUser);
        expect(tokenResponseBad.token).toBeUndefined()
        expect(tokenResponseBad.msg).toBeDefined()
        expect(statusResponseBad).toBe(404)
    });

    test('Validate that it returns an error in case of being an invalid user.', async () => {
        const {
            body: tokenResponseBad,
            status: statusResponseBad
        } = await request.post("/auth").send(invalidUser);

        expect(tokenResponseBad.token).toBeUndefined()
        expect(tokenResponseBad.msg).toBeDefined()
        expect(statusResponseBad).toBe(404)
    })

    test('Validate that the token is correct.', async () => {
        const {
            body: tokenResponse,
            status: statusResponse
        } = await request.post("/auth").send(user);
        expect(statusResponse).toBe(200)

        const { status: objStatus } = await request.get("/users").set(
            "authorization",
            `Bearer ${tokenResponse.token}`
        );
        expect(objStatus).toBe(200);
    })
});

