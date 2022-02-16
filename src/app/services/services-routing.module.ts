import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community/community.component';
import { FuneralComponent } from './funeral/funeral.component';
import { MatrimonialComponent } from './matrimonial/matrimonial.component';

const routes: Routes = [
  {path:"matrimonial", component:MatrimonialComponent},
  {path:"funeral", component:FuneralComponent},
  {path:"community", component:CommunityComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
