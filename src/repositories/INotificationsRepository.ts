interface INotificationsDTO {
  tokens: string[];
  data: {
    title: string;
    body: string;
  };
}

interface INotificationsRepository {
  create({ data, tokens }: INotificationsDTO): Promise<void>;
}

export { INotificationsRepository, INotificationsDTO };
