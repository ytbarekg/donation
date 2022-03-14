import { Router } from "express";
import authController from "../controllers/authController.js";

const router = Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/signout", authController.signout);
router.get("/verifyEmail/:token", authController.verifyEmail);

router.post("/changePassword", authController.changePassword);

router.post("/admin/users/", authController.createUser);
router.put("/admin/users/", authController.updateAccountStatus);

export default router;