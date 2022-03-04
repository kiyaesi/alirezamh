import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedRouter, LocalizeNgModuleFactory, LocalizeRouterModule } from '@gilsdav/ngx-translate-router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    LocalizeRouterModule
  ],
  exports:[
    CommonModule,

    TranslateModule
  ]
})
export class SharedModule { }
