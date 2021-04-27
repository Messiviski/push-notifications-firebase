import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
    });

    await this.repository.save(user);
  }

  async findByName(name: string, password: string): Promise<User> {
    const user = await this.repository.findOne({ name, password });

    return user;
  }
}

export { UsersRepository };
