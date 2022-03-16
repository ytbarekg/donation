import { Router } from "express";
import beneficiaryController from "../controllers/beneficiaryController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Roles from "../Roles.js"

const router = Router();

router.get('/',authMiddleware.authenticated, beneficiaryController.viewBeneficiaries);
router.get('/:id',authMiddleware.authenticated, beneficiaryController.viewBeneficiaryDetail);
router.post('/',authMiddleware.hasRole(Roles.maker), beneficiaryController.registerBeneficiary);
router.put('/:id', authMiddleware.hasRole(Roles.maker),beneficiaryController.updateBeneficiaryInfo);
router.delete('/:id', authMiddleware.hasRole(Roles.maker),beneficiaryController.removeBeneficiary);

export default router;