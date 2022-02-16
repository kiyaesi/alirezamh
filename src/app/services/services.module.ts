import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { FuneralComponent } from './funeral/funeral.component';
import { CommunityComponent } from './community/community.component';
import { MatrimonialComponent } from './matrimonial/matrimonial.component';


@NgModule({
  declarations: [
    ServicesComponent,
    FuneralComponent,
    CommunityComponent,
    MatrimonialComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
