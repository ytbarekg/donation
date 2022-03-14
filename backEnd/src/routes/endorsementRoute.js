import { Router } from "express";
import endorsementController from "../controllers/endorsementController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Roles from "../Roles.js";

const router = Router();

router.get("/", authMiddleware.hasRole(Roles.admin), endorsementController.getAll);
router.get("/me/", authMiddleware.authenticated, endorsementController.getUserEndorsements)
router.get("/:id", authMiddleware.authenticated, endorsementController.getById);
router.post("/", authMiddleware.hasRole(Roles.maker), endorsementController.create);

export default router;