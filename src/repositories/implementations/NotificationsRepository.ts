import { getRepository, Repository } from "typeorm";
import { Notification } from "../../entities/Notification";
import {
  INotificationsDTO,
  INotificationsRepository,
} from "../INotificationsRepository";

class NotificationRepository implements INotificationsRepository {
  private repository: Repository<Notification>;

  constructor() {
    this.repository = getRepository(Notification);
  }

  async create({ data, tokens }: INotificationsDTO): Promise<void> {
    const notification = this.repository.create({
      sended_to: tokens,
      title: data.title,
      body: data.body,
    });

    await this.repository.save(notification);
  }
}

export { NotificationRepository };
