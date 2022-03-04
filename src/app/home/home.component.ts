import { Component, OnInit } from '@angular/core';
import { azanService } from '../core/services/azan.service';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

// import sound from '../../assets/homesound.json';
declare const prayTime :any;


// declare const xml2js:any ;
interface dataI {
  datetime : Array<dataInnerI>

}
interface dataInnerI {
  times : dateOfAzan

}


interface dateOfAzan{
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
  dTodayDate :Date = new Date()   ;
  nowtime :Date = new Date()   ;
  indexforsound :number =0;
  datasound :any[] = [
    {
    "url":"../../assets/audios/q&a/1.mp3",
    "name":"Did Prophet Muhammad marry a 9 year old (Ayesha) Part 1.mp3"
},
  ];
  ended(){
    this.indexforsound+=1;
    console.log(this.indexforsound)
  }
  datasoundquraneng :any[] = [
    {
      "url":"../../assets/audios/quran/1.mp3",
      "name":"Did Quran Copy the Bible Part 1.mp3"
    },
    
    {
      "url":"../../assets/audios/quran/2.mp3",
      "name":"Did Quran Copy the Bible Part 2.mp3"
},
{
  "url":"../../assets/audios/quran/3.mp3",
  "name":"Did Quran Copy the Bible Part 3.mp3"
},

];
datasoundnahjoleng :any[] = [
  {
    "url":"../../assets/audios/nahjol/1.mp3",
    "name":"Imam Ali on Human Rights (Episode 02).mp3"
},

{
"url":"../../assets/audios/nahjol/2.mp3",
"name":"Letter by Imam Ali to Malik Regarding Human Rights Nahjolbalaghah (3).mp3"
},
{
  "url":"../../assets/audios/nahjol/3.mp3",
  "name":"Letter by Imam Ali to Malik Regarding Human Rights Nahjolbalaghah (4).mp3"
},
{
  "url":"../../assets/audios/nahjol/4.mp3",
  "name":"Letter by Imam Ali to Malik Regarding Human Rights Nahjolbalaghah (5).mp3"
},
];
datasoundquestioneng:any[] = [
 {
 "url":"../../assets/audios/q&a/1.mp3",
 "name":"Did Prophet Muhammad marry a 9 year old (Ayesha) Part 1.mp3"
},

{
"url":"../../assets/audios/q&a/2.mp3",
"name":"Did Prophet Muhammad marry a 9 year old (Ayesha) Part 2.mp3"
},
{
"url":"../../assets/audios/q&a/4.mp3",
"name":"Does Islam allow Stoning Part 1.mp3"
},
{
"url":"../../assets/audios/q&a/3.mp3",
"name":"Does Islam allow Stoning Part 2.mp3"
},
{
"url":"../../assets/audios/q&a/5.mp3",
"name":"Rights of women in Islam.mp3"
},
];
datasoundquestionfa:any[] = [
  {
  "url":"../../assets/audios/fa/qanda/1.mp3",
  "name":"آیا ظلم نکردن به دیگران کافی است؟.mp3",},
{
  "url":"../../assets/audios/fa/qanda/2.mp3",
  "name":"آیا پیامبر صلوات میفرستاد؟.mp3"
},
{
  "url":"../../assets/audios/fa/qanda/3.mp3",
  "name":"باطن اعمال صالح.mp3"
},
{
  "url":"../../assets/audios/fa/qanda/4.mp3",
  "name":"دین حق را چطور بشناسیم؟.mp3"
},
{
  "url":"../../assets/audios/fa/qanda/5.mp3",
  "name":"فقه-زمان نماز شب.mp3"
},
{
  "url":"../../assets/audios/fa/qanda/6.mp3",
  "name":"فقه-چه بخشی از مرکز امام علی (ع) حکم مسجد دارد؟.mp3"
},
];
datasoundquranfa :any[] = [
  {
  "url":"../../assets/audios/fa/quran/1.mp3",
  "name":"تفسیر-سوره عنکبوت آیه 2 و3.mp3"
},

{
"url":"../../assets/audios/fa/quran/2.mp3",
"name":"تفسیر-سوره عنکبوت آیه 21.mp3"
},
{
"url":"../../assets/audios/fa/quran/3.mp3",
"name":"تفسیر-سوره عنکبوت آیه 22.mp3"
},
{
  "url":"../../assets/audios/fa/quran/4.mp3",
  "name":"تفسیر-سوره عنکبوت آیه 4.mp3"
  },

];
// datasoundnahjolfa:any =null;
  lang :boolean =false;
  languageUrl:any;
  imageObject :Array<object>=[{
    image: '../../assets/home-picture/medina.jpg',
        thumbImage: '../../assets/home-picture/medina.jpg',
        alt: 'alt of image',
        title: 'title of image'
  },
  {
    image: '../../assets/home-picture/medina.jpg',
    thumbImage: '../../assets/home-picture/medina.jpg',

        alt: 'alt of image secnd',
        title: 'title of image num2'
  },
  {
    image: '../../assets/home-picture/medina.jpg',
    thumbImage: '../../assets/home-picture/medina.jpg',

        alt: 'alt of image secnd',
        title: 'title of image num2'
  }
]
  // xml2js= xml2js.Parser(  
  //   {  
  //     trim: true,  
  //     explicitArray: true  
  //   });  
  city :string ="";
  date :dateOfAzan ={}as any;
  data :dataI  ={
    datetime : {times: [{}] as any }as any
  } as any
  azanchecker : any;
  
  constructor(
    private azanservice : azanService,
    private localizeRouterService: LocalizeRouterService,

    ) { }
    ngOnInit(): void {
      this.callazantimetorento()
      console.log(this.toronto)
      this.azanchecker = setInterval(()=>{this.checkTime(),60000})
      this.languageUrl = this.localizeRouterService.parser.currentLang;

  }
  checkTime(){
   this.nowtime  =(new Date()) ;
   if(this.toronto[0]==this.nowtime){
     //do azan
   }

  }
  async callazantimevancover(){
    try {
      const responce = await this.azanservice.gettimetehran().toPromise();
  
      this.data = responce.results;
      console.log(this.data)

      
    } catch {}  }
    async callazantimetehran(){
      try {
        const responce = await this.azanservice.gettimetehran().toPromise();
        
        this.data = responce.results;
        console.log(this.data)
        
        
      } catch {}  }
      async callazantimetorento(){
        try {
          const responce = await this.azanservice.gettimetehran().toPromise();
      
          this.data = responce.results;
          console.log(this.data);
          this.date = this.data.datetime[0].times;
          console.log(this.date);
          
        } catch {}  }
        async callazantimetorentoavini(){
          try {
            const responce = await this.azanservice.gettimetorontoavini().toPromise();
        
            // this.data = responce.;
            console.log(this.data);
            this.date = this.data.datetime[0].times;
            console.log(this.date);
            
          } catch {}  }
          toronto = prayTime.getPrayerTimes(this.dTodayDate, 43.7061, -79.5152, -5);
    hamilton = prayTime.getPrayerTimes(this.dTodayDate, 43.2414, -79.8360, -5);
    london = prayTime.getPrayerTimes(this.dTodayDate, 43, -81, -5);
    kitchener = prayTime.getPrayerTimes(this.dTodayDate, 43.5, -80.5, -5);
    montreal = prayTime.getPrayerTimes(this.dTodayDate, 45.5115, -73.7321, -5);
          




    audioList = [
      {
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        title: "Smaple 1",
        cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
      },
      {
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
        title: "Sample 2",
        cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
      },
      {
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        title: "Sample 3",
        cover: "https://i1.sndcdn.com/artworks-000249294066-uow7s0-t500x500.jpg"
      }
    ];
    }
    
    
  