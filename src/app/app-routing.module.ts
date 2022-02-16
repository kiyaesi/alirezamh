import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './home/home.component'
export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {path: 'about-us', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
  {path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule)},
  {path: 'services', loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
  {path: 'lectures', loadChildren: () => import('./lectures/lectures.module').then(m => m.LecturesModule)},
  {path: 'classes', loadChildren: () => import('./classes/classes.module').then(m => m.ClassesModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'disabled',
    // relativeLinkResolution: 'legacy',
    scrollPositionRestoration: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
