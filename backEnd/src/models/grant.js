import mongoose from "mongoose";

const Schema = mongoose.Schema;
const grantSchema = new Schema({
    beneficiary: { type: Schema.Types.ObjectId, ref: 'Beneficiary', required: true },
    donation: { type: Schema.Types.ObjectId, ref: 'Donation', required: true },
    amount: {type: Number, required: true},
    status: {type: String, enum:['Granted', 'Paid', 'Canceled'], default: 'Granted'},
    endorcement: { type: Schema.Types.ObjectId, ref: 'Endorcement'},
    maker: { type: Schema.Types.ObjectId, ref: 'User'},
})

const Grant = mongoose.model('Grant', grantSchema);
export default Grant;