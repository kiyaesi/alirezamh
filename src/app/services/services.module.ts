import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { FuneralComponent } from './funeral/funeral.component';
import { CommunityComponent } from './community/community.component';
import { MatrimonialComponent } from './matrimonial/matrimonial.component';
import { SharedModule } from '../shared/shared.module';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';


@NgModule({
  declarations: [
    ServicesComponent,
    FuneralComponent,
    CommunityComponent,
    MatrimonialComponent
  ],
  imports: [
    CommonModule,
    MdbAccordionModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
