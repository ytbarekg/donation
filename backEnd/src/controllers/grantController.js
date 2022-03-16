import autoBind from "auto-bind";
import grantService from "../services/grantService.js";

class GrantController {
  constructor() {
    this.service = grantService;
    autoBind(this);
  }
  async viewGrants(req, res, next) {
    try 
    {
      const grants = await this.service.viewGrants();
      res.json(grants);
    }
     catch (error) 
     {
      next(error);
    }
  }
  async findById(req, res, next) {
    try {
      const id= req.params;
      const grant = await this.service.findById(id);
      res.json(grant);
    } catch (error) {
      next(error);
    }
  }
  async registerGrant(req, res, next) {
    try {
      let data = req.body;
      let grant = await this.service.registerGrant(data);
      res.json(grant);
    } catch (error) {
      next(error);
    }
  }
  async removeGrant(req, res, next) {
    try {
      const grantId = req.params;
      await this.service.removeGrant(grantId);
      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}

export default new GrantController();
