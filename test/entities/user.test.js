import { User, Administrator, Kitchen, Waiter } from "../../src/entities";

describe("Testing User abstract class and the User abstract class implementations", () => {
    test("should throw an error if we try to crear a User instance", () => {
        try {
            const user = new User("Yair Martinez", "YairMC666", "Montecarlo");
            expect(user.name).toBe("Name Admin");
            expect(user.username).toBe("Username Admin");
            expect(user.password).toBe("Password Admin");
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            expect(error.message).toBe("This is an abstract class");
        }
    });

    test("should create an Administrator instance", () => {
        const admin = new Administrator(
            "Name Admin",
            "Username Admin",
            "Password Admin"
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
            "Password kitchen"
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
            "Password Waiter"
        );
        expect(waiter).toBeInstanceOf(Waiter);
        expect(waiter).toBeInstanceOf(User);
        expect(waiter.name).toBe("Name Waiter");
        expect(waiter.username).toBe("Username Waiter");
        expect(waiter.password).toBe("Password Waiter");
    });
});
