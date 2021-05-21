import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {SigninComponent} from './components/signin/signin.component';

const routes: Routes = [
  { path: 'register', component: UserProfileComponent },
  { path: 'login', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
