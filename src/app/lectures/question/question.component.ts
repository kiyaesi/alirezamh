import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  lang:boolean =false;
  constructor() { }
  indexforsound : number = 0;
  ended(){
    this.indexforsound+=1;
     console.log(this.indexforsound)
  }
  ngOnInit(): void {
  }
  datasoundquestioneng:any[] = [
    {
    "url":"../../../assets/audios/q&a/1.mp3",
    "name":"Did Prophet Muhammad marry a 9 year old (Ayesha) Part 1.mp3"
   },
   
   {
   "url":"../../../assets/audios/q&a/2.mp3",
   "name":"Did Prophet Muhammad marry a 9 year old (Ayesha) Part 2.mp3"
   },
   {
   "url":"../../../assets/audios/q&a/4.mp3",
   "name":"Does Islam allow Stoning Part 1.mp3"
   },
   {
   url:"../../../assets/audios/q&a/3.mp3",
   "name":"Does Islam allow Stoning Part 2.mp3"
   },
   {
   "url":"../../../assets/audios/q&a/5.mp3",
   "name":"Rights of women in Islam.mp3"
   },
   ];
   datasoundquestionfa:any[] = [
     {
     "url":"../../../assets/audios/fa/qanda/1.mp3",
     "name":"آیا ظلم نکردن به دیگران کافی است؟.mp3",},
   {
     "url":"../../../assets/audios/fa/qanda/2.mp3",
     "name":"آیا پیامبر صلوات میفرستاد؟.mp3"
   },
   {
     "url":"../../../assets/audios/fa/qanda/3.mp3",
     "name":"باطن اعمال صالح.mp3"
   },
   {
     "url":"../../../assets/audios/fa/qanda/4.mp3",
     "name":"دین حق را چطور بشناسیم؟.mp3"
   },
   {
     "url":"../../../assets/audios/fa/qanda/5.mp3",
     "name":"فقه-زمان نماز شب.mp3"
   },
   {
     "url":"../../../assets/audios/fa/qanda/6.mp3",
     "name":"فقه-چه بخشی از مرکز امام علی (ع) حکم مسجد دارد؟.mp3"
   },
   ];

}
