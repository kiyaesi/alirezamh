import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import e from 'express';
import data from '../eventsl.json';
interface events {
  category?: string;
  name?: string;
  dateDay?: string;
  datemonth?: string;
  dateyear?: string;
  location?: string;
  datehour?: string;
  fullDescription?: string;
  description?: string;
  capacity?: string;
}
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  id: string = "";
  constructor(private route: ActivatedRoute, private translateService: TranslateService, private router: Router) {

    this.route.params.subscribe(params => {
      this.id = params.id;
    });
  }
  perlang: boolean = false;
  events: events = {};
  // alleventsEnNum: number = data.eventsen.length;
  changelang(DIR: any) {
    if (DIR == "rtl") {
      this.perlang = true;
      if (+this.id < data.eventsfa.length) {
        this.events = data.eventsfa[+this.id];
      }
      else {
        this.router.navigateByUrl("/home")
      }
    }
    else {
      this.perlang = false;
      if (+this.id < data.eventsen.length) {
        this.events = data.eventsen[+this.id];
      }
      else {
        this.router.navigateByUrl("")
      }
    }
  }
  ngOnInit(): void {
    this.translateService.stream('DIR').subscribe(DIR => {
      this.changelang(DIR)
    });
  }

}
