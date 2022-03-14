import autoBind from "auto-bind";
class ErrorHandler {
    constructor() {
        autoBind(this);
    }

    

    clientError(err, req, res, next) {

    }

    authenticationError(err, req, res, next) {

    }
    
    authorizationError(err, req, res, next) {
        
    }

    serverError(err, req, res, next) {
        
    }
}

export default new ErrorHandler();