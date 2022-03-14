import autoBind from "auto-bind";
import grantService from "../services/grantService.js";

class GrantController {
  constuctor() {
    this.grantService = grantService;
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
  async findById(req, res, next) {
    try {
      const id= req.params;
      const grant = await this.grantService.findById(id);
      res.json(grant);
    } catch (error) {
      next(error);
    }
  }
  async registerGrant(req, res, next) {
    try {
      let data = req.body;
      let grant = await this.grantService.saveGrant(data);
      res.json(grant);
    } catch (error) {
      next(error);
    }
  }
  async removeGrant(req, res, next) {
    try {
      const grantId = req.params;
      await this.grantService.removeGrant(grantId);
      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}

export default new GrantController();
