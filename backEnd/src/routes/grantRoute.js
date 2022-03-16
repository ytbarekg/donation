import { Router } from "express";
import grantController from "../controllers/grantController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Roles from "../Roles.js"

const router = Router();

router.get("/", authMiddleware.authenticated, grantController.viewGrants);
router.get("/:id",authMiddleware.authenticated, grantController.findById);
router.post("/", authMiddleware.hasRole(Roles.maker), grantController.registerGrant);
router.delete("/:id",authMiddleware.hasRole(Roles.maker), grantController.removeGrant);

export default router;