import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {PostsService} from "./posts.service";
import {PostsStore} from "./posts.store";
import {PostsQuery} from "./posts.query";

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        PostsService,
        PostsStore,
        PostsQuery
    ]
})
export class PostsStateModule { }
