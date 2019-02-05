import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule,ClrFormsDeprecatedModule} from '@clr/angular';
import { Payment1Component } from './payment1/payment1.component';
import { Payment2Component } from './payment2/payment2.component';
import { Payment3Component } from './payment3/payment3.component';


@NgModule({
  declarations: [Payment1Component, Payment2Component, Payment3Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    ClrFormsDeprecatedModule

  ]

})

export class PaymentModule { }

