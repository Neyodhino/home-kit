import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestKitComponent } from './request-kit/request-kit.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { LabPartnerComponent } from './supplierDialog/lab-partner.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabRequestComponent } from './labRequest/labRequest.component';
import { CanActivateGuard } from './core/guards/dashboard-route.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestKitComponent,
    LabPartnerComponent,
    LoginComponent,
    WaitingListComponent,
    DashboardComponent,
    LabRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatIconModule,
    ShareModule
  ],
  entryComponents: [RequestKitComponent, LabPartnerComponent, LoginComponent, LabRequestComponent],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
