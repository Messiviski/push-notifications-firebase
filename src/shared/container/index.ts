import "reflect-metadata";
import { container } from "tsyringe";
import { NotificationRepository } from "../../repositories/implementations/NotificationsRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { INotificationsRepository } from "../../repositories/INotificationsRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<INotificationsRepository>(
  "NotificationsRepository",
  NotificationRepository
);
