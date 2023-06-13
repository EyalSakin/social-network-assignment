import {ID} from "@datorama/akita";

export interface Post {
    id: ID;
    userName: string;
    email: string;
    content: string;
    createdAt: string;
    tags: string[];
}

export interface ServerPost {
    _id: ID;
    user_name: string;
    email: string;
    content: string;
    created_at: string;
    tags: string[];
}