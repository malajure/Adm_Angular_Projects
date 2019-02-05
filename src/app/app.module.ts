import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { RegistrationModule } from './module/registration/registration.module';
import { PaymentModule } from './module/payment/payment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    UiModule,
    DashboardModule,
    RegistrationModule,
    PaymentModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
