import autoBind from "auto-bind";
import Beneficiary from "../models/beneficiary.js";

class BeneficiaryService{
    constructor(){
        this.bModel = Beneficiary;
        autoBind(this);
    }

    async viewBeneficiaries(){
        const data = await this.bModel.find({})
        .select({firstName: 1, middleName: 1,lastName: 1,age: 1, 
                gender:1, phoneNumber:1,dependents: 1})
            console.log(data);
        return data;
    }

    async viewBeneficiaryDetail(id){
        const data = await this.bModel.findById({_id:id},{
            project:{
                address:1,dependents:1, story: 1, photo: 1, grantedAmount:1,
                maximumGrant: 1, registeredBy: 1,verifiedBy:1}
        })
        return data;
    }
    async registerBeneficiary(bData, userId){
        bData.registeredBy = userId;
        bData.verifiedBy = userId;
        const data = await this.bModel.create(bData);
        return data;
    }
    //
    async updateBeneficiaryInfo(bData){
        const data =await this.bModel.updateOne({},{$set: bData});
        return data;
    }
    async removeBeneficiary(bId){
        const data = await this.bModel.remove(bId);
        return true;
    }
}
export default new BeneficiaryService();

   