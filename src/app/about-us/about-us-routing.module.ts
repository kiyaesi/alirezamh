import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { BiographyComponent } from './biography/biography.component';

const routes: Routes = [
  {path:"", component:AboutUsComponent},
  {path:"bio", component:BiographyComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
