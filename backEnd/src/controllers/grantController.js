import autoBind from "auto-bind";
import  grantService  from "../services/grantService.js";

class GrantController {
    constuctor(){
        this.grantModel = Grant;
        autoBind(this);
    }
  async viewGrants(req, res, next) {
    try {
        const grant = await this.grantService.viewGrants();
        res.json(grant);
    } catch (error) {
      next(error);
    }
  }
  async findByName(req, res, next) {
    try {
        const {name} = req.body;
        const grant = await this.grantService.findByName(name);
        res.json(grant);
    } catch (error) {
      next(error);
    }
  }
  async registerGrant(req, res, next) {
    try 
    {
      let data = req.body;
      this.validateGrant(data);
      let grant = await this.grantService.saveGrant(data);
      res.json(grant);
    } 
    catch (error) 
    {
      next(error);
    }
  }
  async removeGrant(req, res, next) {
    try {
        const grantId = req.params;
        await this.grantService.removeGrant(grantId);
        res.json({success: true});
    } catch (error) {
      next(error);
    }
  }
}

export default new GrantController();
