import {EntityState, EntityStore, StoreConfig} from "@datorama/akita";
import {Post} from "./post.model";

export interface PostsState extends EntityState<Post> {}

@StoreConfig({ name: 'posts' })
export class PostsStore extends EntityStore<PostsState> {
    constructor() {
        super();
    }
}