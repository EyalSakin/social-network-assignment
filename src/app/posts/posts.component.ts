import { Component } from '@angular/core';
import {PostsQuery} from "../state/post/posts.query";
import {Observable} from "rxjs";
import {Post} from "../state/post/post.model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public posts$: Observable<Post[]> = this.postsQuery.selectAll();

  constructor(private postsQuery: PostsQuery) {}
}
