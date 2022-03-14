import { Router } from "express";
import beneficiaryController from "../controllers/beneficiaryController";

const router = Router();

router.get('/beneficiary', beneficiaryController.viewBeneficiaries);
router.get('/beneficiary/:id', beneficiaryController.viewBeneficiaryDetail);
router.post('/beneficiary', beneficiaryController.registerBeneficiary);
router.put('/beneficiary/:id', beneficiaryController.updateBeneficiaryInfo);
router.delete('/beneficiary/:id', beneficiaryController.removeBeneficiary);

export default router;