import {Component, OnInit} from '@angular/core';
import {PostsService} from "../state/post/posts.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.setInitialData();
  }
}
