import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { AddflightComponent } from './addflight/addflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { FormsModule } from '@angular/forms';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    AddflightComponent,
    DeleteflightComponent,
    AdminloginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
