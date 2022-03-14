import { Router } from "express";
import donationController from "../controllers/donationController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Roles from "../Roles.js";

const router = Router();

router.get("/", authMiddleware.hasRole(Roles.admin), donationController.getAll);
router.get("/me/", authMiddleware.authenticated, donationController.getUserDonations)
router.get("/:id", authMiddleware.authenticated, donationController.getById);
router.post("/", authMiddleware.hasRole(Roles.donor), donationController.create)

export default router;