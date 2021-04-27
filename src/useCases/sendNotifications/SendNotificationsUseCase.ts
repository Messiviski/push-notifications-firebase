import * as admin from "firebase-admin";
import { inject, injectable } from "tsyringe";
import { INotificationsRepository } from "../../repositories/INotificationsRepository";

interface INotificationMessage {
  tokens: string[];
  data: {
    title: string;
    body: string;
  };
}

@injectable()
class SendNotificationsUseCase {
  constructor(
    @inject("NotificationsRepository")
    private notificationRepository: INotificationsRepository
  ) {}

  execute({ data, tokens }: INotificationMessage): void {
    const failedTokens = [];

    const message = {
      data,
      tokens,
    };

    admin
      .messaging()
      .sendMulticast(message)
      .then((response) => {
        if (response.failureCount > 0) {
          response.responses.forEach((response, index) => {
            if (!response.success) {
              failedTokens.push(tokens[index]);
            }
          });
        }
      });

    if (failedTokens.length === tokens.length) {
      throw new Error("The messages were not sent!");
    }

    this.notificationRepository.create({ data, tokens });
  }
}

export { SendNotificationsUseCase };
