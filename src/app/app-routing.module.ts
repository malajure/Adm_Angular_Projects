import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard/dashboard.component';
import { RegistationComponent } from './module/registration/registation.component';
import { PaymentComponent } from './module/payment/payment.component';
import { RedirectComponent } from './module/dashboard/redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'adm-registation', component: RegistationComponent },
  { path: 'adm-payment', component: PaymentComponent },
  { path: 'redirect', component: RedirectComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
