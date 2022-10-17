export class User {
    constructor(name, userName, password, roleId) {

        if (typeof roleId != "number") {
            throw Error("Invalid id Role");
        } else {
            this._roleId = roleId;
        }
        
        if (typeof name != "string" || name == undefined) {
            throw Error("Invalid user name")
        }
        else {
            this._name = name;
        }

        if (typeof userName != "string" || userName == undefined) {
            throw Error("Invalid username")
        }
        else {
            this._userName = userName;
        }

        if (typeof password != "string" || password == undefined) {
            throw Error("Invalid password")
        }
        else {
            this._password = password;
        }
       
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

    get userName() {
        return this._userName;
    }

    set userName(value) {
        if (value == undefined || typeof value !== "string") {
            throw Error("Invalid username")
        } else {
            this._userName = value;
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

    toPersistenceObject(){
        return {
            name: this._name,
            userName: this._userName,
            password: this._password,
            roleId: this._roleId        
        }
    }
}