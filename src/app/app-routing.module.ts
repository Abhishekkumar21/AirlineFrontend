import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FlightListComponent } from './flight-list/flight-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'List',
    component: FlightListComponent,
  },
  {
    path: 'add-flight',
    component: AddflightComponent,
  },
  {
    path: 'login',
    component: AdminloginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
