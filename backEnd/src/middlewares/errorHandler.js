import autoBind from "auto-bind";
import AuthenticationError from "../errors/AuthenticationError.js";
import AuthorizationError from "../errors/AuthorizationError.js";
import CredentialError from "../errors/CredentialError.js";
import NotFoundError from "../errors/NotFoundError.js";
import PropertyRequiredError from "../errors/PropertyRequiredError.js";
import ServerError from "../errors/ServerError.js";
import ValidationError from "../errors/ValidationError.js";
class ErrorHandler {
    constructor() {
        autoBind(this);
    }

    allErrorHandler(err, req, res, next) {
        let code = 500;
        switch(err.constructor) {
            case AuthenticationError:
                code = 401;
                break;
            case AuthorizationError:
                code = 401;
                break;
            case CredentialError:
                code = 401;
                break;
            case NotFoundError:
                code = 404;
                break;
            case PropertyRequiredError:
                code = 400;
                break;
            case ValidationError:
                code = 401;
                break;
            case ServerError:
                code = 500;
                break;
            default:
                code = 500;
        }
        console.log(err.stack);
        const response = {
            error: err.message,
            path: req.path,
            timestamp: new Date()
        }
        res.status(code).json(response);
    }
}

export default new ErrorHandler();