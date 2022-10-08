import { User } from "./User.js"

export class Administrator extends User{
    constructor(name, username, password){
        super(name, username, password)
    }
}