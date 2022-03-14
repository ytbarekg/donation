import userService from "../services/userService.js";
import autoBind from "auto-bind";

class AuthController {
    constructor() {
        autoBind(this)
        this.service = userService
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
            const authHeader = req.headers.authorization;
            const token = authHeader && authHeader.split(" ")[1]
            await this.service.signout(token);
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
            const {id} = req.user;
            await this.service.changePassword(id, currentPassword, newPassword);
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
            res.json(user);
        }
        catch(error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const users = await this.service.getAll();
            console.log(users);
            res.json(users);
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const {id} = req.params;
            const user = await this.service.getById(id);
            res.json(user);
        } catch (error) {
            next(error)
        }
    }

    async updateUser(req, res, next) {
        try {
            const {id} = req.params;
            const update = req.body;
            const user = await this.service.updateUser(id, update);
            res.json(user)
        }
        catch(error) {
            next(error);
        }
    }

    async updateUserMe(req, res, next) {
        try {
            const {id} = req.user;
            const update = req.body;
            const user = await this.service.updateUser(id, update);
            res.json(user)
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