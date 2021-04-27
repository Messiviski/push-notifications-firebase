import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  password: string;
}

interface IUsersRepository {
  findByName(name: string, password: string): Promise<User>;
  create({ name, password }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };
