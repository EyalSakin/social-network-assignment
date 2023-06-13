import {QueryEntity} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {PostsState} from "./posts.store";

@Injectable({
    providedIn: 'root'
})
export class TodosQuery extends QueryEntity<PostsState> {

}