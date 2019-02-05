import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard/dashboard.component';
import { PaymentComponent } from './module/payment/payment.component';
import { Registrationstep1Component } from './module/registration/registrationstep1/registrationstep1.component';
import { Registrationstep2Component } from './module/registration/registrationstep2/registrationstep2.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adm-registation', component: Registrationstep1Component },
  { path: 'adm-registation-2', component: Registrationstep2Component },
  { path: 'adm-payment', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
