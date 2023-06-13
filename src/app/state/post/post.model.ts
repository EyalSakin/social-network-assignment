import {ID} from "@datorama/akita";

export interface Post {
    id: ID;
    userName: string;
    email: string;
    content: string;
    createdAt: string;
    tags: string[];
}