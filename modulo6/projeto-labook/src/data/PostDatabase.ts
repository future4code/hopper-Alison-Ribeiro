import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase{
    private static TABLE_POST = "labook_posts"

    async createPost ({id, photo, description, type, createdAt, authorId}: any):Promise<void> {
        await PostDatabase.connection(PostDatabase.TABLE_POST)
           .insert({
              id,
              photo,
              description,
              type,
              createdAt,
              authorId
           })
        }
    
    
}