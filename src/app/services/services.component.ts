import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private localizeRouterService: LocalizeRouterService,

  ) { }
  languageUrl :any;
  ngOnInit(): void {
    this.languageUrl = this.localizeRouterService.parser.currentLang;

  }

}
