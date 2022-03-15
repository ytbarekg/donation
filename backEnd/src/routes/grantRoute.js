import { Router } from "express";
import grantController from "../controllers/grantController.js";

const router = Router();

router.get("/", grantController.viewGrants);
router.get("/:id", grantController.findById);
router.post("/", grantController.registerGrant);
router.delete("/:id", grantController.removeGrant);

export default router;