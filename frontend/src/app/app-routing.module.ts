import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SingleComponent} from './components/single/single.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CategoryComponent} from './components/category/category.component';
import {LoginComponent} from './components/login/login.component';
import {ProfileGuard} from './guard/profile.guard';
import {SearchComponent} from './components/search/search.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'index/:id', component: SingleComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]
  },
  {
    path: 'index/category/:value', component: CategoryComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'index/search/:query', component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
