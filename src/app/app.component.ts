import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Renderer2, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs/operators';
declare const gtag: Function;
declare const $: any;
declare const window: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private translateService: TranslateService,
    private renderer: Renderer2,

    @Inject(PLATFORM_ID) platformId: string,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.translateService.stream('DIR').subscribe(dir => {
      this.directionChanged(dir);
    });

  }
  ngOnInit(): void {
    if (!this.isBrowser) return;
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      /** START : Code to Track Page View  */
      gtag('event', 'page_view', {
        page_path: this.route.url
      })
      /** END */
    })
    this.renderer.listen('window', 'click', (e: Event) => {
      const parent = $(e.target).parents('.headerMenu');
      if ((!parent.length && !$(e.target).hasClass('drop-down__button')) || $(e.target).hasClass('drop-down__item')) {
        $('.drop-down--active').removeClass('drop-down--active');
      }
    });
  }
  isBrowser: boolean;

  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = dir === 'rtl' ? 'rtl' : 'ltr';
    this.changeCssFile(dir);
  }

  private changeCssFile(dir: string): void {
    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById('bootstrap-css') as HTMLLinkElement;
    const bundleName = dir === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'bootstrap-css';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }
  title = 'canada';

}
