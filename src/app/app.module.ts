import { NgModule } from '@angular/core';
import { BrowserModule ,BrowserTransferStateModule, TransferState } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import { AppRoutingModule, routes,  } from './app-routing.module';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {   NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {   NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { BsDropdownModule } from '@ng-bootstrap/';
import { translateBrowserLoaderFactory } from './core/utils/translate-browser.loader';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './core/utils/localize-browser.loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
// import { LocalizeRouterModule } from 'localize-router';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
     SharedModule ,

    // .withServerTransition({appId: 'serverApp'})
    
    BrowserAnimationsModule,
    // NgbCollapseModule.forRoot(),
    // BsDropdownModule.forRoot(),
    HttpClientModule,
    BrowserTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fa',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient
          ,TransferState
        ]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true,
    }),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
