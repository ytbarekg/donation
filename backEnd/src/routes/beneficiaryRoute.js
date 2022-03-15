import { Router } from "express";
import beneficiaryController from "../controllers/beneficiaryController.js";

const router = Router();

router.get('/', beneficiaryController.viewBeneficiaries);
router.get('/:id', beneficiaryController.viewBeneficiaryDetail);
router.post('/', beneficiaryController.registerBeneficiary);
router.put('/:id', beneficiaryController.updateBeneficiaryInfo);
router.delete('/:id', beneficiaryController.removeBeneficiary);

export default router;