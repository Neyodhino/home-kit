import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RequestKitComponent } from './request-kit/request-kit.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { LabPartnerComponent } from './supplierDialog/lab-partner.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RequestKitComponent,
    LabPartnerComponent,
    LoginComponent,
    WaitingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatIconModule,
    ShareModule
  ],
  entryComponents: [RequestKitComponent, LabPartnerComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
