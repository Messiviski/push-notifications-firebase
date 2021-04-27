import dotenv from "dotenv";

class Env {
  static configure(): void {
    dotenv.config();
  }

  static get PORT(): string {
    return process.env.PORT;
  }
}

export { Env };
