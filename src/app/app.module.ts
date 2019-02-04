import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { DashboardModule } from './module/dashboard/dashboard.module';
import { DashboardComponent } from './module/dashboard/dashboard/dashboard.component';
import { RegistrationModule } from './module/registration/registration.module';
import { RegistationComponent } from './module/registration/registation.component';
import { PaymentModule } from './module/payment/payment.module';
import { PaymentComponent } from './module/payment/payment.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adm-registation', component: RegistationComponent },
  { path: 'adm-payment', component: PaymentComponent }
];

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
    PaymentModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
