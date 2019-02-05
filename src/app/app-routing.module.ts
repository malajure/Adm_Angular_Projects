import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard/dashboard.component';
import { RegistationComponent } from './module/registration/registation.component';
import { PaymentComponent } from './module/payment/payment.component';
import { RegistrationReportComponent } from './report/registration-report/registration-report.component';
import { PaymentReportComponent } from './report/payment-report/payment-report.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adm-registation', component: RegistationComponent },
  { path: 'adm-payment', component: PaymentComponent },
  { path: 'registration-report',component:RegistrationReportComponent},
  { path: 'payment-report',component:PaymentReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
