import { Router } from "express";
import authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Roles from "../Roles.js";

const router = Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/signout", authController.signout);
router.get("/verifyEmail/:token", authController.verifyEmail);

router.post("/changePassword", authMiddleware.authenticated, authController.changePassword);
router.put("/users/me", authMiddleware.authenticated, authController.updateUserMe);

router.get("/admin/users/", authMiddleware.hasRole(Roles.admin), authController.getAll);
router.get("/admin/users/:id", authMiddleware.hasRole(Roles.admin), authController.getById);
router.post("/admin/users/", authMiddleware.hasRole(Roles.admin), authController.createUser);
router.put("/admin/users/:id", authMiddleware.hasRole(Roles.admin), authController.updateUser);

export default router;