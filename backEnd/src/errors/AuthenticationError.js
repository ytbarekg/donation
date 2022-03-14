import CustomError from "./CustomError.js";
export default class AuthenticationError extends CustomError {
    constructor() {
        super("Authentication required to access the resource!");
    }
}