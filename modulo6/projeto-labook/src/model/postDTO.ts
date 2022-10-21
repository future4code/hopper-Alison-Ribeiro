import { POST_TYPES } from "./PostTypes";

export interface PostInsertDTO{
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
 }