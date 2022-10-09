import { User } from "./User.js"

export class Administrator extends User{
    constructor(name, username, password){
        super(name, username, password)
    }

    get name(){
        return this._name;
    }

    set name(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid user name")
        }else{
            this._name = value;
        }
    }

    get username(){
        return this._username;
    }

    set username(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid username")
        }else{
            this._username = value;
        }
    }

    get password(){
        return this._password;
    }

    set password(value){
        if(value == undefined || typeof value !== "string"){
            throw Error ("Invalid password")
        }else{
            this._password = value;
        }
    }
}