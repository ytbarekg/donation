import autoBind from "auto-bind";
import jwtUtil from "../utils/jwtUtil.js";
import AuthenticationError from "../errors/AuthenticationError.js"
import AuthorizationError from "../errors/AuthorizationError.js"

class AuthMiddleware {
    constructor() {
        autoBind(this);
    }

    authenticated(req, res, next) {
        try {
            const authHeader = req.headers.authentication;
            const token = authHeader && authHeader.split(" ")[1]
            const payload = jwtUtil.verify(token);
            if(payload) {
                req.user = payload;
                return next()
            }
            const error = new AuthenticationError();
            return next(error)
        }
        catch(error) {
            new AuthenticationError();
            return next(error)
        }
    }

    hasRole(roles = []) {
        if (typeof roles === 'string') {
            roles = [roles];
        }
        function authorized(req, res, next) {
            try {
                const userRole = req.user.role;
                if(roles.includes(userRole)) {
                    return next()
                }
                const error = new AuthorizationError();
                return next(error)
            }
            catch(error) {
                // const error = new AuthorizationError();
                return next(error)
            }
        }
        return [this.authenticated, authorized];
    }

    ownsResource() {
        
    }
}
export default new AuthMiddleware();