import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Post} from "./post.model";
import {Injectable} from "@angular/core";

export interface PostsState extends EntityState<Post> {}

@Injectable({ providedIn: "root" })
@StoreConfig({ name: 'posts' })
export class PostsStore extends EntityStore<PostsState> {
    constructor() {
        super();
    }
}