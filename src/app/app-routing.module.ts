import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard/dashboard.component';
import { RedirectComponent } from './module/dashboard/redirect/redirect.component';
import { Payment1Component } from './module/payment/payment1/payment1.component';
import { Payment2Component} from './module/payment/payment2/payment2.component';
import { Payment3Component } from './module/payment/payment3/payment3.component';
import { RegistrationReportComponent } from './report/registration-report/registration-report.component';
import { PaymentReportComponent } from './report/payment-report/payment-report.component';
import { Registrationstep1Component } from './module/registration/registrationstep1/registrationstep1.component';
import { Registrationstep2Component } from './module/registration/registrationstep2/registrationstep2.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
 

  { path: 'adm-payment', component: Payment1Component, 
    children:[
    {path:'adm-payment2',component:Payment2Component},
    {path:'adm-payment3',component:Payment3Component}  
  ]},
  {path:'adm-payment2',component:Payment2Component},
  {path:'adm-payment3',component:Payment3Component},
  { path: 'registration-report',component:RegistrationReportComponent},
  { path: 'payment-report',component:PaymentReportComponent},
  { path: 'adm-registation', component: Registrationstep1Component },
  { path: 'adm-registation-2', component: Registrationstep2Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
