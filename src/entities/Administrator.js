import { User } from "./User.js"

export class Administrator extends User {
    constructor(name, username, password, roleId) {
        super(name, username, password, roleId)
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value == undefined || typeof value !== "string") {
            throw Error("Invalid user name")
        } else {
            this._name = value;
        }
    }

    get username() {
        return this._username;
    }

    set username(value) {
        if (value == undefined || typeof value !== "string") {
            throw Error("Invalid username")
        } else {
            this._username = value;
        }
    }

    get password() {
        return this._password;
    }

    set password(value) {
        if (value == undefined || typeof value !== "string") {
            throw Error("Invalid password")
        } else {
            this._password = value;
        }
    }
    get roleId() {
        return this._roleId;
    }
    set roleId(value) {
        if (typeof value != "number") {
            throw Error("Invalid id Role");
        } else {
            this._roleId = value;
        }
    }

    toPersistenceObject(){
        return {
            name: this._name,
            username: this._username,
            password: this._password,
            roleId: this._roleId       
        }
    }

}