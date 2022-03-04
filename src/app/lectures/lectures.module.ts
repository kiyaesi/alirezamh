import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesRoutingModule } from './lectures-routing.module';
import { LecturesComponent } from './lectures.component';
import { QuestionComponent } from './question/question.component';
import { NahjolbalaghaComponent } from './nahjolbalagha/nahjolbalagha.component';
import { QuranRecitationComponent } from './quran-recitation/quran-recitation.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LecturesComponent,
    QuestionComponent,
    NahjolbalaghaComponent,
    QuranRecitationComponent,
  ],
  imports: [
    CommonModule,
    LecturesRoutingModule,
    SharedModule
  ]
})
export class LecturesModule { }
