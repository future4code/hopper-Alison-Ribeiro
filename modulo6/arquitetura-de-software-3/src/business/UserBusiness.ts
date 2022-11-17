import { UserInputDTO } from "./../model/userDTO";
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {

  public create = async (input: UserInputDTO) => {

    try {
      const { name, email, password } = input;

      if (!email || !name || !password) {
        throw new Error("Dados inválidos (name, email, password)");
      }

      const id = Date.now().toString();

      const userDatabase = new UserDatabase();

      await userDatabase.createUser({
        id,
        name,
        email,
        password,
      });

    } catch (error) {
      throw new Error(error.message);
    }
  };

  public getAll = async () => {

    try {
      const userDatabase = new UserDatabase();
      const result = await userDatabase.getAll();

      return result;
      
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
