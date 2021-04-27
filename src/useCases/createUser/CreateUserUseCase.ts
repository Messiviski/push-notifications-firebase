import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  password: string;
}
@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, password }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByName(
      name,
      password
    );

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    this.usersRepository.create({ name, password });
  }
}

export { CreateUserUseCase };
