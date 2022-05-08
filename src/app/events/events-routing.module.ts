import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { EventsComponent } from './events.component';

const routes: Routes = [{
  path: "",
  component: EventsComponent
}, {
  path: ":id",
  component: EventComponent
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
