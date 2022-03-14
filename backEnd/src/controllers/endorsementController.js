import autoBind from "auto-bind";
import endorsementService from "../services/endorsementService.js";

class EndorsementController {
    constructor() {
        this.service = endorsementService;
        autoBind(this)
    }

    async create(req, res, next) {
        try {
            const endorsementData = req.body;
            const endorsement = await this.service.create(endorsementData);
            res.json(endorsement);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const endorsements = this.service.getAll();
            res.json(endorsements);
        } catch (error) {
            next(error)
        }
    }
    
    async getUserEndorsements(req, res, next) {
        try {
            const {id, role} = req.user;
            const endorsements = await this.service.getUserEndorsements(id, role);
            res.json(endorsements);
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const {id} = req.params;
            const endorsement = await this.service.getById(id);
            res.json(endorsement);
        } catch (error) {
            next(error)
        }
    }
}

export default new EndorsementController();