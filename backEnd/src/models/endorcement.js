import mongoose from "mongoose";

const Schema = mongoose.Schema;
const endorcementSchema = new Schema({
    beneficiary: { type: Schema.Types.ObjectId, ref: 'Beneficiary', required: true },
    donor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    grant: { type: Schema.Types.ObjectId, ref: 'Grant', required: true },
    content: {
        text: String,
        photoUrl: String,
        videoUrl: String
    },
    maker: { type: Schema.Types.ObjectId, ref: 'User', required: true},
})

const Endorcement = mongoose.model('Endorcement', endorcementSchema);
export default Endorcement;