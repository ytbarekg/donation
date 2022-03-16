import autoBind from "auto-bind";
import BeneficiaryService from "../services/beneficiaryService.js";

class BeneficiaryController{
    constructor() {
    this.service = BeneficiaryService;
    autoBind(this);
    }
    async viewBeneficiaries(req, res, next){
      try{
          const data = await this.service.viewBeneficiaries();
          res.json(data);
      }
      catch(err){
      next(error)
      }
  }
    async viewBeneficiaryDetail(req, res, next){
      try{
        const id = req.params;
        const data = await this.service.viewBeneficiaryDetail(id);
        res.json(data);
      }
      catch(error){
          next(error)
      }
    }
    async registerBeneficiary (req, res, next){
        try{
            const {id} = req.user;
            const bData = req.body;
            const data =await this.service.registerBeneficiary(bData, id);
            res.json(data);
        }
        catch(error){
            next(error)
        }
    } 
    async updateBeneficiaryInfo(req, res, next){
        try{
            const bData = req.body;
            const data = await this.service.updateBeneficiaryInfo(bData);
            res.json(data);
        }
        catch(error){
            next(error)
        }
    }
    async removeBeneficiary(req,res, next){
        try{
            const id = req.params;
            const data = await this.service.removeBeneficiary(id);
            res.json({success:true});
        }
        catch(error){
            next(error)
        }
    }
}

export default new BeneficiaryController();