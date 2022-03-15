export interface Beneficiary{
    firstName: String,
    middleName: String,
    lastName:String,
    dateOfBirth: { type: Number, required: true },
    gender: String,
    phoneNumber:String,
    address: String,
    dependents: String,
    story: String,
    category: String
}
   