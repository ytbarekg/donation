import crypto from "crypto"
import autoBind from "auto-bind";
import User from "../models/user.js";
import jwtUtil from "../utils/hashUtil.js"
import hashUtil from "../utils/hashUtil.js";
import CredentialError from "../errors/CredentialError.js";
import NotFoundError from "../errors/NotFoundError.js";
import ValidationError from "../errors/ValidationError.js"

class AuthService {
    constructor() {
        this.userModel = User;
        autoBind(this);
    }

    async emailExists(email) {
        const user = await this.userModel.findOne({email});
        if(user) {
            return true;
        }
        return false;
    }

    async createUser(userData) {
        if(await this.emailExists(userData.email)) {
            throw new ValidationError("Email already Exists!");
        }
        try {
            const verifyToken = crypto.randomBytes(32).toString("hex");
            userData = {
                password: await hashUtil.hashPassword(userData.password),
                verifyToken,
                ...userData
            }
            const user = await this.userModel.create(userData);
            return user;
        }
        catch(error) {
            throw new ValidationError(error.message);
        }
    }

    async signup(userData) {
        userData.role = 'donor'
        const user = await this.createUser(userData);
        return user;
    }

    async verifyEmail(verifyToken) {
        const user = await this.userModel.findOne({verifyToken});
        if(user) {
            user.emailVerified = true;
            user.save();
            return true;
        }
        throw new NotFoundError("token");
    }

    async login(email, password) {
        const user = await this.userModel.findOne({email});
        if(user) {
            if(await hashUtil.comparePassword(password, user.password)) {
                const payload = {
                    id: user._id,
                    email: user.email,
                    role: user.role
                }
                const token = jwtUtil.sign(payload)
                return {token};
            }
        }
        throw new CredentialError();
    }

    async signout() {
        return true;
    }

    async changePassword(userId, currentPassword, newPassword) {
        const user = await this.userModel.findOne({_id: userId});
        if(user) {
            if(await hashUtil.comparePassword(currentPassword, user.password)) {
                user.password = hashUtil.hashPassword(newPassword);
                user.save();
                return true;
            }
        }
        throw new CredentialError();
    }

    async updateAccountStatus(userId, status) {
        const user = await this.userModel.findOne({_id: userId});
        if(user) {
            user.accountStatus = status;
            user.save();
            return true;
        }
        throw new NotFoundError("user");
    }
   
}
export default new AuthService();