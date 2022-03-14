import mongoose from "mongoose";

const Schema = mongoose.Schema;
const donationSchema = new Schema({
    donor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    beneficiaries: [{ type: Schema.Types.ObjectId, ref: 'Beneficiary' }],
    payment: {
        method: {type: String, enum: ['Credit', 'Debit', 'BankTransfer', 'Cash'], required: true}, 
        transactionNumber: {type: String, required: true},
        amount: {type: Number, required: true},
        status: {type: String, enum: ['Accepted', 'Pending', 'Rejected']}
    }
})

const Donation = mongoose.model('Donation', donationSchema);
export default Donation;