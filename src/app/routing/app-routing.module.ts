import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "../home-page/home-page.component";

enum Page {
  Home = 'home'
}

const routes: Routes = [
  { path: Page.Home, component: HomePageComponent },
  { path: '', redirectTo: Page.Home, pathMatch: 'full' },
  { path: '**', redirectTo: Page.Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
