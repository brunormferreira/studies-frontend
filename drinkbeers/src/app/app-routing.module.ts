import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeersComponent } from '../app/components/beers/beers.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { BeersDetailComponent } from './components/beers/beers-detail/beers-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'beers', component: BeersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: BeersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
