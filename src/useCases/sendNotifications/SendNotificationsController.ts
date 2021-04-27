import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendNotificationsUseCase } from "./SendNotificationsUseCase";

class SendNotificationsController {
  handle(request: Request, response: Response): Response {
    const { tokens, data } = request.body;

    const sendNotificationUseCase = container.resolve(SendNotificationsUseCase);

    sendNotificationUseCase.execute({ tokens, data });

    return response.status(201).send();
  }
}

export { SendNotificationsController };
