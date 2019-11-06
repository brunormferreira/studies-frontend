import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import { UsersDetailsComponent } from './components/users/users-details/users-details.component';

const routes: Routes = [
  { path : '', redirectTo : 'users', pathMatch : 'full'},
  { path: 'users', component: UsersComponent },
  { path: 'users-details', component: UsersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
