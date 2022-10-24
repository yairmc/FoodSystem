export class Branch {
    constructor(branchName, branchAddress) {
        if (typeof branchName != "string" || branchName == undefined) {
            throw Error("Invalid branch name")
        }
        else {
            this._branchName = branchName;
        }

        if (typeof branchAddress != "string" || branchAddress == undefined) {
            throw Error("Invalid branch address")
        } else {
            this._branchAddress = branchAddress;
        }
    }

    get branchName() {
        return this._branchName;
    }

    set branchName(value) {
        if (value == undefined || typeof value !== "string") {
            throw Error("Invalid branch name")
        } else {
            this._branchName = value;
        }
    }

    get branchAddress() {
        return this._branchAddress;
    }

    set branchAddress(value) {
        if (value == undefined || typeof value !== "string") {
            throw Error("Invalid branch address")
        } else {
            this._branchAddress = value;
        }
    }

    toPersistenceObject() {
        return {
            branchName: this._branchName,
            branchAddress: this._branchAddress,
        }
    }
}