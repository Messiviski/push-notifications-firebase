import { Router } from "express";
import { SendNotificationsController } from "../useCases/sendNotifications/SendNotificationsController";

const notificationsRoutes = Router();

const sendNotificationsController = new SendNotificationsController();

notificationsRoutes.post("/", sendNotificationsController.handle);

export { notificationsRoutes };
