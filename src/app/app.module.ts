import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostComponent } from './post/post.component';
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import { PostsComponent } from './posts/posts.component';
import {PostsService} from "./state/post/posts.service";
import {PostsStore} from "./state/post/posts.store";
import {PostsQuery} from "./state/post/posts.query";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [
      PostsService,
      PostsStore,
      PostsQuery
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
