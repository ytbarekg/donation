import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import Roles from "../Roles.js";

const router = Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/signout", userController.signout);
router.get("/verifyEmail/:token", userController.verifyEmail);

router.post("/changePassword", authMiddleware.authenticated, userController.changePassword);
router.put("/me", authMiddleware.authenticated, userController.updateUserMe);

router.get("/", authMiddleware.hasRole([Roles.admin, Roles.donor]), userController.getAll);
router.get("/:id", authMiddleware.hasRole(Roles.admin), userController.getById);
router.post("/", authMiddleware.hasRole(Roles.admin), userController.createUser);
router.put("/:id", authMiddleware.hasRole(Roles.admin), userController.updateUser);
router.delete("/:id", authMiddleware.hasRole(Roles.admin), userController.deleteUser);

export default router;