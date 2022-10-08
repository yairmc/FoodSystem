import { User } from "./User.js"

export class Waiter extends User{
    constructor(name, username, password){
        super(name, username, password)
    }
}