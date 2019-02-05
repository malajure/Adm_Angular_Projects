import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard/dashboard.component';
import { RegistationComponent } from './module/registration/registation.component';

import { PaymentComponent } from './module/payment/payment.component';
import { RedirectComponent } from './module/dashboard/redirect/redirect.component';

import { Payment1Component } from './module/payment/payment1/payment1.component';
import { Payment2Component} from './module/payment/payment2/payment2.component';
import { Payment3Component } from './module/payment/payment3/payment3.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adm-registation', component: RegistationComponent },

  { path: 'adm-payment', component: PaymentComponent },
  { path: 'redirect', component: RedirectComponent }
 

  { path: 'adm-payment', component: Payment1Component, 
    children:[
    {path:'adm-payment2',component:Payment2Component},
    {path:'adm-payment3',component:Payment3Component}  
  ]},
  {path:'adm-payment2',component:Payment2Component},
  {path:'adm-payment3',component:Payment3Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
