import autoBind from "auto-bind";
import Donation from "../models/donation.js";
import Beneficiary from "../models/beneficiary.js"
import CredentialError from "../errors/CredentialError.js";
import NotFoundError from "../errors/NotFoundError.js";
import ValidationError from "../errors/ValidationError.js"
import ServerError from "../errors/ServerError.js";

class DonationService {
    constructor() {
        this.donationModel = Donation;
        this.beneficiaryModel = Beneficiary;
        autoBind(this)
    }

    async create(donationData) {
        try {
            const donation = await this.donationModel.create(donationData);
            return donation;
        } catch (error) {
            throw new ValidationError(error.message);
        }
    }

    async getAll() {
        try {
            const donations = await this.donationModel.find({});
            return donations;
        } catch (error) {
            throw new ServerError();
        }
    }

    async getUserDonations(userId) {
        try {
            const query = {
                donor: userId
            }
            const donations = await this.donationModel.find(query);
            return donations;
        } catch (error) {
            throw new NotFoundError("user donations");
        }
    }

    async getById(id) {
        try {
            const donation = await this.donationModel.findOne({_id: id});
            if(donation) {
                return donation
            }
            throw new NotFoundError("donation");
        } catch (error) {
            throw new NotFoundError("donation"); 
        }
    }

}

export default new DonationService();