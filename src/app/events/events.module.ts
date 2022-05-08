import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { SharedModule } from '../shared/shared.module';
import { EventComponent } from './event/event.component';


@NgModule({
  declarations: [
    EventsComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    SharedModule
  ]
})
export class EventsModule { }
