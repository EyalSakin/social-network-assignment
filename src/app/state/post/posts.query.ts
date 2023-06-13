import {QueryEntity} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {PostsState, PostsStore} from "./posts.store";

@Injectable({
    providedIn: 'root'
})
export class PostsQuery extends QueryEntity<PostsState> {
    constructor(override store: PostsStore) {
        super(store);
    }
}