import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nahjolbalagha',
  templateUrl: './nahjolbalagha.component.html',
  styleUrls: ['./nahjolbalagha.component.scss']
})
export class NahjolbalaghaComponent implements OnInit {
  lang:boolean =true;
  constructor() { }
  indexforsound : number = 0;
  ended(){
    this.indexforsound+=1;
     console.log(this.indexforsound)
  }
  ngOnInit(): void {
  }
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

}
