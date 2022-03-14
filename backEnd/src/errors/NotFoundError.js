import CustomError from "./CustomError.js";
export default class NotFoundError extends CustomError {
    constructor(message) {
        super("The requested " + message + " not Found!");
    }
}