import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesRoutingModule } from './lectures-routing.module';
import { LecturesComponent } from './lectures.component';
import { QuestionComponent } from './question/question.component';
import { NahjolbalaghaComponent } from './nahjolbalagha/nahjolbalagha.component';
import { QuranRecitationComponent } from './quran-recitation/quran-recitation.component';


@NgModule({
  declarations: [
    LecturesComponent,
    QuestionComponent,
    NahjolbalaghaComponent,
    QuranRecitationComponent
  ],
  imports: [
    CommonModule,
    LecturesRoutingModule
  ]
})
export class LecturesModule { }
