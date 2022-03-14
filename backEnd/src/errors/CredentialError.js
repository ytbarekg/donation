import CustomError from "./CustomError.js";
export default class CredentialError extends CustomError {
    constructor() {
        super("Invalid Credentials!");
    }
}