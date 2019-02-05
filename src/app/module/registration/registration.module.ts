import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registrationstep1Component } from './registrationstep1/registrationstep1.component';
import { ClarityModule,ClrFormsDeprecatedModule} from '@clr/angular';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { Registrationstep2Component } from './registrationstep2/registrationstep2.component';
import { Existingregstep1Component } from './existingreg/existingregstep1/existingregstep1.component';
import { Existingregstep2Component } from './existingreg/existingregstep2/existingregstep2.component';
import { Existingregstep3Component } from './existingreg/existingregstep3/existingregstep3.component';

@NgModule({
  declarations: [Registrationstep1Component, Existingregstep1Component,  Existingregstep2Component, Existingregstep3Component,Registrationstep2Component],

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
