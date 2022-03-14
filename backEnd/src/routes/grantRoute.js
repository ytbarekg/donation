import { Router } from "express";
import {grantController} from "../controllers/grantController";

const router = Router();

router.get("/grant", grantController.viewGrants);
router.get("/grant/:id", grantController.findById);
router.post("/grant", grantController.registerGrant);
router.delete("/grant/:id", grantController.removeGrant);

module.exports = router;