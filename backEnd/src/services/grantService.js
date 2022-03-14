import autoBind from "auto-bind";
import Grant from "../models/grant.js";

class GrantService{
    constuctor(){
        this.grantModel = Grant;
        autoBind(this);
    }
    async registerGrant(grantData){        
        const grant = this.grantModel.create(grantData);
        return grant;   
    }
    async viewGrants(){
        const grants = await this.grantModel.find({},{project:{
                _id: 1,beneficiary:1,donation:1,amount: 1,status: 1,endorcement: 1
            }})
            return grants;
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