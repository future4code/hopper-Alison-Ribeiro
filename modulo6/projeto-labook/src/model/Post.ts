import { POST_TYPES } from "./PostTypes"

export class Post {
    constructor(
      private id: string,
      private photo: string,
      private description: string,
      private type: POST_TYPES,
      private created_at: Date,
      private author_id: string
    ) { }
    
    getId() {
      return this.id
    }
  
    getName() {
      return this.photo
    }
  
    getEmail() {
      return this.description
    }
  
    getType() {
      return this.type
    }

    getcreateAt() {
      return this.created_at
      }

    getauthorId() {
      return this.author_id
    }  
  
    setId(newId: string) {
      this.id = newId
    }
  
    setName(newPhoto: string) {
      this.photo = newPhoto
    }
  
    setEmail(newDescription: string) {
      this.description = newDescription
    }
  
    setType(newType: POST_TYPES) {
      this.type = newType
    }

    setCreatedAt(newCreratedAt: Date) {
      this.created_at = newCreratedAt
    }

    setAuthorId(newAuthorId: string) {
      this.author_id = newAuthorId
    }
  }
  