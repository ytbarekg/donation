import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    emailVerified: {type: Boolean, default: false},
    verifyToken: {type: String, required: true},
    accountStatus: { type: String,enum: ['Active', 'Suspended', 'Disabled'], default: 'Active' }
})

const User = mongoose.model('User', userSchema);
export default User;