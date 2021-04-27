import { Router } from "express";
import { notificationsRoutes } from "./notifications.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/notifications", notificationsRoutes);

export { router };
