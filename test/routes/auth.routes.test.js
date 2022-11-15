import { app } from "../../src/main";
import supertest from "supertest";
import { expect } from "@jest/globals";

describe("FS-8 Test the authentication paths", () => {
    const request = supertest(app);

    const user = {
        name: "Miguel",
        userName: "Akuasnin",
    };

    test("Validate that the user exists and the token is returned.", async () => {
        const { body: dbUser } = await request.get(
            `/users/username?username=${user.userName}`
        );

        expect(dbUser._name).toBe(user.name);

        var { body: tokenResponse } = await request.post("/auth").send(user);
        expect(tokenResponse.accessToken).toBeDefined()
    });

    // TODO: The jwt token generation does not check beforehand if the user does indeed exist.
    // test('Validate that it returns an error if the user trying to authenticate does not exist', async () => { second })

    // TODO: The jwt token generation does not check beforehand if the user does indeed exist.
    // test('Validate that it returns an error in case of being an invalid user.', async () => { second })

    test('Validate that the token is correct.', async () => {
        const { body } = await request.post("/auth").send(user);
        let authorization = await request.get("/auth").set(
            'authorization', body
        ).send()

        expect(authorization.status).toBe(200);
    })
});

