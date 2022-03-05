import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonateRoutingModule } from './donate-routing.module';
import { DonateComponent } from './donate.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DonateComponent
  ],
  imports: [
    CommonModule,
    DonateRoutingModule,
    SharedModule
  ]
})
export class DonateModule { }
