import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './core/guards/dashboard-route.guard';

import { HomeComponent } from './home/home.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'waiting', component: WaitingListComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
