import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registrationstep1Component } from './registrationstep1/registrationstep1.component';
import { ClarityModule,ClrFormsDeprecatedModule} from '@clr/angular';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [Registrationstep1Component],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    ClrFormsDeprecatedModule

  ]
})
export class RegistrationModule { }
