import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
   private static TABLE_POST = "labook_posts";

   public async createPost({
      id,
      photo,
      description,
      type,
      created_at,
      author_id
   }: any): Promise<void> {
      await PostDatabase.connection(PostDatabase.TABLE_POST)
      .insert({
         id,
         photo,
         description,
         type,
         created_at,
         author_id
      });
   }
   
   public async getPost({
      id
   }: any): Promise<void>{
      const queryResult: any = await PostDatabase.connection(PostDatabase.TABLE_POST)
      .select("*")
      .where("id", "=", `%${id}%`)

      return queryResult
   }
}