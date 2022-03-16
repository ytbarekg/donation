import crypto from "crypto"
import autoBind from "auto-bind";
import Roles from '../Roles.js'
import User from "../models/user.js";
import jwtUtil from "../utils/jwtUtil.js"
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
        
        let roleFound = false;
        for (const role in Roles) {
            console.log(role)
            if(userData.role === Roles[role]) {

                roleFound = true;
                break;
            }
        }

        if(!roleFound) {
            throw new ValidationError("Unknown Role!");
        }

        try {
            const verifyToken = crypto.randomBytes(32).toString("hex");
            userData = {
                verifyToken,
                ...userData
            }
            userData.password = await hashUtil.hashPassword(userData.password);
            const user = await this.userModel.create(userData);
            return user;
        }
        catch(error) {
            throw new ValidationError(error.message);
        }
    }

    async getAll() {
        try {
            const users = await this.userModel.find({});
            // console.log(users);
            return users;
        } catch (error) {
            throw new ServerError();
        }
    }

    async getById(id) {
        try {
            const user = await this.userModel.findOne({_id: id});
            if(user) {
                return user;
            }
            throw new NotFoundError("user");
        } catch (error) {
            throw new NotFoundError("user"); 
        }
    }

    async signup(userData) {
        userData.role = Roles.donor;
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
                    firstName: user.firstName,
                    lastName: user.lastName,
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
                user.password = await hashUtil.hashPassword(newPassword);
                user.save();
                return true;
            }
        }
        throw new CredentialError();
    }

    async updateUser(userId, update) {
        const user = await this.userModel.updateOne({_id: userId}, update);
        if(user) {
            return user;
        }
        throw new NotFoundError("user");
    }

    async deleteUser(userId) {
        const response = await this.userModel.deleteOne({_id: userId});
        if(response.deletedCount === 1) {
            return response;
        }
        throw new NotFoundError("user");
    }
   
}
export default new AuthService();