import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateServerLoaderFactory } from './core/utils/translate-server.loader';
import { BrowserModule, TransferState } from '@angular/platform-browser';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { routes } from './app-routing.module';
import { localizeServerLoaderFactory } from './core/utils/localize-server.loader';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'serverApp'
    }),
    AppModule,
    ServerModule,
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeServerLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, TransferState],
      },
      initialNavigation: true,
    }),
    ServerTransferStateModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fa',
      loader: {
        provide: TranslateLoader,
        useFactory: translateServerLoaderFactory,
        deps: [TransferState]
      }
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }