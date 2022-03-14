import mongoose from "mongoose";

const Schema = mongoose.Schema;
const policySchema = new Schema({
    donation: {
        minimum: Number,
        maximum: Number,
        maximumBeneficieries: Number,
        createBeneficiary: Boolean
    },
    prioritization: {
       age: { selectionRate: Number, increaseSelection: Boolean },
       gender: { selectionRate: Number, increaseSelection: Boolean },
       dependant: { selectionRate: Number, increaseSelection: Boolean },
       paidAmount: { selectionRate: Number, increaseSelection: Boolean },
       beneficiaryCategory: [{
           categoryName: String,
           selectionRate: Number,
           increaseSelection: Boolean
       }]
    },
    processingFree: {type:Number, required: true},
    grantExpiration: {type: Number, required: true}
})

const Policy = mongoose.model('Policy', policySchema);
export default Policy;