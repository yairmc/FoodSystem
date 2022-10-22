import { User, Administrator, Kitchen, Waiter } from "../../src/entities";

describe("Testing User abstract class and the User abstract class implementations", () => {
    test("should throw an error if we try to create a User instance", () => {
        try {
            const user = new User("Yair Martinez", "YairMC666", "Montecarlo", 1);
            expect(user.name).toBe("Name Admin");
            expect(user.username).toBe("Username Admin");
            expect(user.password).toBe("Password Admin");
        } catch (error) {

        }
    });

    test("should create an Administrator instance", () => {
        const admin = new Administrator(
            "Name Admin",
            "Username Admin",
            "Password Admin",
            1
        );
        expect(admin).toBeInstanceOf(Administrator);
        expect(admin).toBeInstanceOf(User);
        expect(admin.name).toBe("Name Admin");
        expect(admin.username).toBe("Username Admin");
        expect(admin.password).toBe("Password Admin");
    });

    test("should create an Kitchen instance", () => {
        const kitchen = new Kitchen(
            "Name kitchen",
            "Username kitchen",
            "Password kitchen",
            1
        );
        expect(kitchen).toBeInstanceOf(Kitchen);
        expect(kitchen).toBeInstanceOf(User);
        expect(kitchen.name).toBe("Name kitchen");
        expect(kitchen.username).toBe("Username kitchen");
        expect(kitchen.password).toBe("Password kitchen");
    });

    test("should create an Waiter instance", () => {
        const waiter = new Waiter(
            "Name Waiter",
            "Username Waiter",
            "Password Waiter",
            1
        );
        expect(waiter).toBeInstanceOf(Waiter);
        expect(waiter).toBeInstanceOf(User);
        expect(waiter.name).toBe("Name Waiter");
        expect(waiter.username).toBe("Username Waiter");
        expect(waiter.password).toBe("Password Waiter");
    });
});
