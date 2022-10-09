 export class User{
    constructor(name, username, password){
        if(new.target === User){
            throw new Error("This is an abstract class");
        }

        if (typeof name != "string" || name == undefined){
            throw Error ("Invalid user name")
        }
        else{
            this._name = name;
        }

        if (typeof username != "string" || username == undefined){
            throw Error ("Invalid username")
        }
        else{
            this._username = username;
        }

        if (typeof password != "string" || password == undefined){
            throw Error ("Invalid password")
        }
        else{
            this._password = password;
        }
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