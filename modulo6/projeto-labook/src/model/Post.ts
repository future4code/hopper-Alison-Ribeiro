import { POST_TYPES } from "./PostTypes"

export class User {
    constructor(
      private id: string,
      private photo: string,
      private description: string,
      private type: POST_TYPES,
      private createdAt: Date,
      private authorId: string
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
      return this.createdAt
      }

    getauthorId() {
      return this.authorId
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
      this.createdAt = newCreratedAt
    }

    setAuthorId(newAuthorId: string) {
      this.authorId = newAuthorId
    }
  }
  