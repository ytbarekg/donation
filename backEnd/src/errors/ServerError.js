import CustomError from "./CustomError.js";
export default class ServerError extends CustomError {
    constructor() {
        super("Server failed to respond to the request!");
    }
}