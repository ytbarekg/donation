import mongoose from "mongoose";

const Schema = mongoose.Schema;
const beneficiarySchema = new Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female'] },
    phoneNumber: { type: String},
    address: { type: String, required: true },
    dependents: {type: Number},
    story: {type: String},
    photo: {type: String},
    category: { type: String, required: true },
    grantedAmount: { type: Number, default: 0 },
    maximumGrant: {type: Number, default: Number.MAX_VALUE},
    registeredBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    verifiedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    endorcements: [{ type: Schema.Types.ObjectId, ref: 'Endorcement', required: true }]
})

const Beneficiary = mongoose.model('Beneficiary', beneficiarySchema);
export default Beneficiary;