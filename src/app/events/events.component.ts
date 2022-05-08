import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import data from './eventsl.json';
interface events {
  category: string;
  name: string;
  dateDay: string;
  datemonth: string;
  dateyear: string;
  location: string;
  datehour: string;
  description: string;
}
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(private translateService: TranslateService,
    @Inject(PLATFORM_ID) platformId: string,
    @Inject(DOCUMENT) private document: Document,

  ) {
    this.isBrowser = isPlatformBrowser(platformId);


  }
  isBrowser: boolean;
  changeEvent(EventsE: any) {
    if (EventsE == "true") {
      this.notEvents = false;
    }

  }
  changelang(DIR: any) {
    if (DIR == "rtl") {
      this.perlang = true;
    } else {
      this.perlang = false;
    }
  }
  allEventsfa: events[] = data.eventsfa;

  allEventsEn: events[] = data.eventsen;

  notEvents: boolean = true;
  perlang: boolean = false
  ngOnInit(): void {
    // if (!this.isBrowser) return;
    this.translateService.stream('DIR').subscribe(DIR => {
      this.changelang(DIR)
    });
    this.translateService.stream('EventsE').subscribe(EventsE => {
      this.changeEvent(EventsE)
    });
  }

}
