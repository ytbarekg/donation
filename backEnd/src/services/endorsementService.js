import autoBind from "auto-bind";
import Endorsement from "../models/endorsement.js";
import Beneficiary from "../models/beneficiary.js"
import NotFoundError from "../errors/NotFoundError.js";
import ValidationError from "../errors/ValidationError.js"
import ServerError from "../errors/ServerError.js";
import Roles from "../Roles.js";

class EndorsementService {
    constructor() {
        this.endorsementModel = Endorsement;
        this.beneficiaryModel = Beneficiary;
        autoBind(this)
    }

    async create(endorsementData) {
        try {
            const endorsement = await this.endorsementModel.create(endorsementData);
            return endorsement;
        } catch (error) {
            throw new ValidationError(error.message);
        }
    }

    async getAll() {
        try {
            const endorsements = await this.endorsementModel.find({});
            return endorsements;
        } catch (error) {
            throw new ServerError();
        }
    }

    async getUserEndorsements(userId, role) {
        try {
            let query = {}
            if(role == Roles.donor) {
                query = {
                    donor: userId
                }
            }
            else if(role == Roles.maker) {
                query = {
                    maker: userId
                }
            }
            const endorsements = await this.endorsementModel.find(query);
            return endorsements;
        } catch (error) {
            throw new NotFoundError("user endorsements");
        }
    }

    async getById(id) {
        try {
            const endorsement = await this.endorsementModel.findOne({_id: id});
            if(endorsement) {
                return endorsement;
            }
            throw new NotFoundError("endorsement");
        } catch (error) {
            throw new NotFoundError("endorsement"); 
        }
    }

}

export default new EndorsementService();