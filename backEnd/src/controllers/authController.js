import authService from "../services/authService.js";
import autoBind from "auto-bind";

class AuthController {
    constructor() {
        autoBind(this)
        this.service = authService
    }

    async signup(req, res, next) {
        try {
            let data = req.body;
            this.validateUser(data);
            let user = await this.service.signup(data);
            // user = {
            //     id: user._id,
            //     ...user
            // }
            
            res.json(user);
        }
        catch(error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const {email, password} = req.body;
            const token = await this.service.login(email, password);
            res.json(token);
        }
        catch(error) {
            next(error);
        }
    }

    async signout(req, res, next) {
        try {
            const {id} = req.user.id;
            await this.service.signout(id);
            res.json({success: true});
        }
        catch(error) {
            next(error);
        }
    }

    async verifyEmail(req, res, next) {
        try {
            const {token} = req.params;
            await this.service.verifyEmail(token);
            res.json({success: true});
        }
        catch(error) {
            next(error);
        }
    }

    async changePassword(req, res, next) {
        try {
            const {currentPassword, newPassword} = req.body;
            const {userId} = req.user.id;
            await this.service.changePassword(userId, currentPassword, newPassword);
            res.json({success: true});
        }
        catch(error) {
            next(error);
        }
    }

    async createUser(req, res, next) {
        try {
            let data = req.body;
            this.validateUser(data);
            let user = await this.service.createUser(data);
            // user = {
            //     id: user.id,
            //     ...user
            // }
            res.json(user);
        }
        catch(error) {
            next(error);
        }
    }

    async updateAccountStatus(req, res, next) {
        try {
            const {id, status} = req.body;
            await this.service.updateAccountStatus(id, status);
            res.json({success: true})
        }
        catch(error) {
            next(error);
        }
    }

    validateUser(user) {
        return true;
    }
}

export default new AuthController();