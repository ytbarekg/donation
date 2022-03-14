import CustomError from "./CustomError.js";
export default class AuthorizationError extends CustomError {
    constructor() {
        super("Insufficient authorization to access the resource!");
    }
}