import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistationComponent } from './registation.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule,ClrFormsDeprecatedModule } from '@clr/angular';

@NgModule({
  declarations: [RegistationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    ClrFormsDeprecatedModule
  ]
})
export class RegistrationModule { }
