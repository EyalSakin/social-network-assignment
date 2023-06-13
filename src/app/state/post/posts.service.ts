import {Injectable} from "@angular/core";
import {PostsStore} from "./posts.store";

@Injectable({ providedIn: "root" })
export class PostsService {
    constructor(private postsStore: PostsStore) {}
}