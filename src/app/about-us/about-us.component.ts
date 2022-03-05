import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  languageUrl:any;
  constructor(
    private localizeRouterService: LocalizeRouterService,

  ) { }

  ngOnInit(): void {
    this.languageUrl = this.localizeRouterService.parser.currentLang;

  }

}
