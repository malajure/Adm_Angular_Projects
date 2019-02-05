import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ClarityModule,ClrFormsDeprecatedModule} from '@clr/angular';
import { RedirectComponent } from './redirect/redirect.component';

@NgModule({
  declarations: [DashboardComponent,
    RedirectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    ClrFormsDeprecatedModule

  ]
})
export class DashboardModule { }
