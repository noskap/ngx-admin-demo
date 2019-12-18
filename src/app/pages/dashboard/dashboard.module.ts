import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule, NbDatepickerModule, NbInputModule,
  NbProgressBarModule,
  NbRadioModule,
  NbStepperModule
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbProgressBarModule,
    NbStepperModule,
    NbButtonModule,
    NbCheckboxModule,
    NbRadioModule,
    NbInputModule,
    NbDatepickerModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
