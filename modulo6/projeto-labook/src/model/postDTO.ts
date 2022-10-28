import { POST_TYPES } from "./PostTypes";

export interface PostInsertDTO{
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
 }