import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SingleComponent} from "./components/single/single.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {CategoryComponent} from "./components/category/category.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'index/:id', component: SingleComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'index/category/domestic', component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
