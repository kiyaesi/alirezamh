import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  locales = this.localizeRouterService.parser.locales;
  currentUrl = '';

  isCollapsed :boolean =true;
  isCollapse :boolean =true;
  Collapse :boolean = true;
  constructor(
    private localizeRouterService: LocalizeRouterService,
    private router: Router,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
  }
  changeLanguage(locale: string): void {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });  }

    private setCurrentUrl(): void {
      this.currentUrl = this.router.url
        .replace('/' + this.localizeRouterService.parser.currentLang, '')
        .split('?')[0];
    }

}
