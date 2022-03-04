import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { BiographyComponent } from './biography/biography.component';
import { SharedModule } from '../shared/shared.module';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';


@NgModule({
  declarations: [
    AboutUsComponent,
    BiographyComponent
  ],
  imports: [
    CommonModule,
    MdbAccordionModule,
    AboutUsRoutingModule,
    SharedModule
  ]
})
export class AboutUsModule { }
