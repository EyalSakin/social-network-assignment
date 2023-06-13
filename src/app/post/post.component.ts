import {Component, Input} from '@angular/core';
import {Post} from "../state/post/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() data!: Post;
}
