import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quran-recitation',
  templateUrl: './quran-recitation.component.html',
  styleUrls: ['./quran-recitation.component.scss']
})
export class QuranRecitationComponent implements OnInit {
  lang:boolean =false;
  constructor() { }
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
indexforsound : number = 0;
ended(){
  this.indexforsound+=1;
   console.log(this.indexforsound)
}
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
  ngOnInit(): void {
  }

}
