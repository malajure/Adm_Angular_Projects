import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registrationstep1Component } from './registrationstep1/registrationstep1.component';
import { ClarityModule,ClrFormsDeprecatedModule} from '@clr/angular';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { Registrationstep2Component } from './registrationstep2/registrationstep2.component';

@NgModule({
  declarations: [Registrationstep1Component, Registrationstep2Component],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    ClrFormsDeprecatedModule,
    RouterModule
  ]
})
export class RegistrationModule { }
