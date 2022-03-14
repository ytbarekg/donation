import autoBind from "auto-bind";
import donationService from "../services/donationService.js";

class DonationController {
    constructor() {
        this.service = donationService;
        autoBind(this)
    }

    async create(req, res, next) {
        try {
            const donationData = req.body;
            const donation = await this.service.create(donationData);
            res.json(donation);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req, res, next) {
        try {
            const donations = this.service.getAll();
            res.json(donations);
        } catch (error) {
            next(error)
        }
    }
    
    async getUserDonations(req, res, next) {
        try {
            const userId = req.user.id;
            const donations = await this.service.getUserDonations(userId);
            res.json(donations);
        } catch (error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const {id} = req.params;
            const donation = await this.service.getById(id);
            res.json(donation);
        } catch (error) {
            next(error)
        }
    }
}

export default new DonationController();