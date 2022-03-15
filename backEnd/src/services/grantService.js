import autoBind from "auto-bind";
import Grant from "../models/grant.js";
import ServerError from "../errors/ServerError.js";
import Donation from "../models/donation.js";
import Beneficiary from "../models/beneficiary.js";
import Endorsement from "../models/endorsement.js";



class GrantService{
    constuctor(){
        this.grantModel = Grant;
        this.endorsementModel = Endorsement;
        this.beneficiaryModel = Beneficiary;
        this.donationModel = Donation;
        autoBind(this);
    }
    async registerGrant(data){        
        const grant = this.grantModel.create(data);
        return grant;   
    }
    async viewGrants(){
        try {
            const grants = await this.grantModel.find({});
        // ,{project:{
        //         _id: 1,beneficiary:1,donation:1,amount: 1,status: 1,endorcement: 1
        //     }})
            return grants;
        } catch (error) {
            throw new ServerError();
        }
    }
    async findById(id){
        const grant = await this.grantModel.findOne({_id:id}, {project:{
            _id: 1,beneficiary:1,donation:1,amount: 1,status: 1,endorcement: 1
        }} )
        return grant;         
    }
    
    async removeGrant(grantId){
        await this.grantModel.remove(grantId);
        return true; 
    }
    }
    
export default new GrantService();