import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationReportComponent } from './registration-report/registration-report.component';
import { PaymentReportComponent } from './payment-report/payment-report.component';

@NgModule({
  declarations: [RegistrationReportComponent, PaymentReportComponent],
  imports: [
    CommonModule
  ]
})
export class ReportModule { }
