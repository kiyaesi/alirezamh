import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { Howl, Howler } from 'howler';
import { isPlatformBrowser } from '@angular/common';

// import sound from '../../assets/homesound.json';
declare const prayTime: any;


// declare const xml2js:any ;
interface dataI {
  datetime: Array<dataInnerI>

}
interface dataInnerI {
  times: dateOfAzan

}


interface dateOfAzan {
  Asr: string,
  Dhuhr: string,
  Fajr: string,
  Imsak: string,
  Isha: string,
  Maghrib: string,
  Midnight: string,
  Sunrise: string,
  Sunset: string,
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dTodayDate: Date = new Date();
  nowtime: Date = new Date();
  indexforsound: number = 0;
  datasound: any[] = [
    {
      "url": "../../assets/audios/q&a/1.mp3",
      "name": "Did Prophet Muhammad marry a 9 year old (Ayesha) Part 1.mp3"
    },
  ];
  ended() {
    this.indexforsound += 1;
    console.log(this.indexforsound)
  }
  datasoundquraneng: any[] = [
    {
      "url": "../../assets/audios/quran/1.mp3",
      "name": "Did Quran Copy the Bible Part 1.mp3"
    },

    {
      "url": "../../assets/audios/quran/2.mp3",
      "name": "Did Quran Copy the Bible Part 2.mp3"
    },
    {
      "url": "../../assets/audios/quran/3.mp3",
      "name": "Did Quran Copy the Bible Part 3.mp3"
    },

  ];
  datasoundnahjoleng: any[] = [
    {
      "url": "../../assets/audios/nahjol/1.mp3",
      "name": "Imam Ali on Human Rights (Episode 02).mp3"
    },

    {
      "url": "../../assets/audios/nahjol/2.mp3",
      "name": "Letter by Imam Ali to Malik Regarding Human Rights Nahjolbalaghah (3).mp3"
    },
    {
      "url": "../../assets/audios/nahjol/3.mp3",
      "name": "Letter by Imam Ali to Malik Regarding Human Rights Nahjolbalaghah (4).mp3"
    },
    {
      "url": "../../assets/audios/nahjol/4.mp3",
      "name": "Letter by Imam Ali to Malik Regarding Human Rights Nahjolbalaghah (5).mp3"
    },
  ];
  datasoundquestioneng: any[] = [
    {
      "url": "../../assets/audios/q&a/1.mp3",
      "name": "Did Prophet Muhammad marry a 9 year old (Ayesha) Part 1.mp3"
    },

    {
      "url": "../../assets/audios/q&a/2.mp3",
      "name": "Did Prophet Muhammad marry a 9 year old (Ayesha) Part 2.mp3"
    },
    {
      "url": "../../assets/audios/q&a/4.mp3",
      "name": "Does Islam allow Stoning Part 1.mp3"
    },
    {
      "url": "../../assets/audios/q&a/3.mp3",
      "name": "Does Islam allow Stoning Part 2.mp3"
    },
    {
      "url": "../../assets/audios/q&a/5.mp3",
      "name": "Rights of women in Islam.mp3"
    },
  ];
  datasoundquestionfa: any[] = [
    {
      "url": "../../assets/audios/fa/qanda/1.mp3",
      "name": "آیا ظلم نکردن به دیگران کافی است؟.mp3",
    },
    {
      "url": "../../assets/audios/fa/qanda/2.mp3",
      "name": "آیا پیامبر صلوات میفرستاد؟.mp3"
    },
    {
      "url": "../../assets/audios/fa/qanda/3.mp3",
      "name": "باطن اعمال صالح.mp3"
    },
    {
      "url": "../../assets/audios/fa/qanda/4.mp3",
      "name": "دین حق را چطور بشناسیم؟.mp3"
    },
    {
      "url": "../../assets/audios/fa/qanda/5.mp3",
      "name": "فقه-زمان نماز شب.mp3"
    },
    {
      "url": "../../assets/audios/fa/qanda/6.mp3",
      "name": "فقه-چه بخشی از مرکز امام علی (ع) حکم مسجد دارد؟.mp3"
    },
  ];
  datasoundquranfa: any[] = [
    {
      "url": "../../assets/audios/fa/quran/1.mp3",
      "name": "تفسیر-سوره عنکبوت آیه 2 و3.mp3"
    },

    {
      "url": "../../assets/audios/fa/quran/2.mp3",
      "name": "تفسیر-سوره عنکبوت آیه 21.mp3"
    },
    {
      "url": "../../assets/audios/fa/quran/3.mp3",
      "name": "تفسیر-سوره عنکبوت آیه 22.mp3"
    },
    {
      "url": "../../assets/audios/fa/quran/4.mp3",
      "name": "تفسیر-سوره عنکبوت آیه 4.mp3"
    },

  ];
  // datasoundnahjolfa:any =null;
  lang: boolean = false;
  afterview: boolean = false;
  languageUrl: any;
  imageObject: Array<object> = [{
    image: '../../assets/home-picture/medina.jpg',
    thumbImage: '../../assets/home-picture/medina.jpg',
  },
  {
    image: '../../assets/home-picture/medina.jpg',
    thumbImage: '../../assets/home-picture/medina.jpg',

  },
  {
    image: '../../assets/home-picture/medina.jpg',
    thumbImage: '../../assets/home-picture/medina.jpg',

  }
  ]
  city: string = "";
  date: dateOfAzan = {} as any;
  data: dataI = {
    datetime: { times: [{}] as any } as any
  } as any
  azanchecker: any;
  sound = new Howl({
    src: ['../../assets/audios/1693591.mp3'],
    loop: false
  });
  soundzohr = new Howl({
    src: ['../../assets/audios/1693591.mp3'],
    loop: false
  });
  soundmaghreb = new Howl({
    src: ['../../assets/audios/1693591.mp3'],
    loop: false
  });
  isBrowser: boolean;
  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    private localizeRouterService: LocalizeRouterService,

  ) {
    this.isBrowser = isPlatformBrowser(platformId);

  }
  ngOnInit(): void {
    console.log(this.toronto)
    this.languageUrl = this.localizeRouterService.parser.currentLang;
    if (!this.isBrowser) return;
    this.afterview = true;

    if ((2 <= (this.dTodayDate.getMonth())) && (this.dTodayDate.getMonth() < 10)) {
      this.toronto = prayTime.getPrayerTimes(this.dTodayDate, 43.7061, -79.5152, -4);
      this.hamilton = prayTime.getPrayerTimes(this.dTodayDate, 43.2414, -79.8360, -4);
      this.london = prayTime.getPrayerTimes(this.dTodayDate, 43, -81, -4);
      this.kitchener = prayTime.getPrayerTimes(this.dTodayDate, 43.5, -80.5, -4);
      this.montreal = prayTime.getPrayerTimes(this.dTodayDate, 45.5115, -73.7321, -4);
    }
    else {
      this.toronto = prayTime.getPrayerTimes(this.dTodayDate, 43.7061, -79.5152, -5);
      this.hamilton = prayTime.getPrayerTimes(this.dTodayDate, 43.2414, -79.8360, -5);
      this.london = prayTime.getPrayerTimes(this.dTodayDate, 43, -81, -5);
      this.kitchener = prayTime.getPrayerTimes(this.dTodayDate, 43.5, -80.5, -5);
      this.montreal = prayTime.getPrayerTimes(this.dTodayDate, 45.5115, -73.7321, -5);
    }
    this.hourofsobh = +this.toronto[0].split(":")[0];
    this.minofsobh = +this.toronto[0].split(":")[1];
    this.hourofzohr = +this.toronto[2].split(":")[0];
    this.minofzohr = +this.toronto[2].split(":")[1];
    this.nowhour = new Date().getHours();
    this.hourofmaghreb = +this.toronto[5].split(":")[0];
    this.minofmaghreb = +this.toronto[5].split(":")[1];
    this.azan();
    this.azanzohr();
    this.azanmaghreb();
  }
  nowhour: number = 0;
  nowmin: number = new Date().getMinutes();
  hourofsobh: any = 0;
  minofsobh: any = 0;
  hourofzohr: any = 0;
  minofzohr: any = 0;
  hourofmaghreb: any = 0;
  minofmaghreb: any = 0;

  azan() {
    if (0 < +this.nowhour && +this.nowhour <= +this.hourofsobh) {
      console.log(this.hourofsobh)
      this.hourofsobh -= this.nowhour;
      this.minofsobh -= this.nowmin;
      if (this.hourofsobh == 0) {
        if (this.minofsobh < 0) {
          return;
        }


      }
      setTimeout(() => {
        console.log("sb")
        console.log(this.hourofsobh)
        console.log(this.minofsobh)


        this.sound.play();
      }, ((this.hourofsobh * 60 * 60) + (this.minofsobh * 60)) * 1000);


    }

  }
  ngOnDestroy(): void {
    this.sound.stop();
    this.soundmaghreb.stop();
    this.soundzohr.stop();
  }

  azanzohr() {
    if ((0 < +this.nowhour) && (+this.nowhour <= +this.hourofzohr)) {
      this.hourofzohr -= this.nowhour;
      this.minofzohr -= this.nowmin;
      console.log("zohr")

      if (this.hourofzohr == 0) {
        if (this.minofzohr < 0) {
          return;
        }


      }
      setTimeout(() => {
        console.log("zhr")
        this.soundzohr.play();
      }, ((this.hourofzohr * 60 * 60) + (this.minofzohr * 60)) * 1000);


    }

  }
  azanmaghreb() {
    if (0 < +this.nowhour && +this.nowhour <= +this.hourofmaghreb) {
      this.hourofmaghreb -= this.nowhour;
      this.minofmaghreb -= this.nowmin;
      console.log("maghreb")

      if (this.hourofmaghreb == 0) {
        if (this.minofmaghreb < 0) {
          return;
        }


      }
      setTimeout(() => {
        console.log("maghreb")
        this.soundmaghreb.play();
      }, ((this.hourofmaghreb * 60 * 60) + (this.minofmaghreb * 60)) * 1000);


    }
  }


  toronto: any = "";
  hamilton: any = "";
  london: any = "";
  kitchener: any = "";
  montreal: any = "";
}


