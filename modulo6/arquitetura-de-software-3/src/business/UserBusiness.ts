import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness {

  async create({ email, name, password }: any):Promise<void> {

    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)")
    }

    const id = Date.now().toString();

    const userDatabase = new UserDatabase()

    await userDatabase.create({
      id,
      name,
      email,
      password
    })
  }

  async getAll() {
    try {
      const userDatabase = new UserDatabase();
      const result = await userDatabase.getAll();
      
      return result

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

}