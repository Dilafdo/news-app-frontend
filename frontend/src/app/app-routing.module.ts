import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SingleComponent} from "./components/single/single.component";
import {ProfileComponent} from "./components/profile/profile.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'news/:id', component: SingleComponent
  },
  {
    path: 'profile', component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
