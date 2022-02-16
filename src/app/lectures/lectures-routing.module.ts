import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturesComponent } from './lectures.component';
import { NahjolbalaghaComponent } from './nahjolbalagha/nahjolbalagha.component';
import { QuestionComponent } from './question/question.component';
import { QuranRecitationComponent } from './quran-recitation/quran-recitation.component';

const routes: Routes = [
  {
    path:"",component:LecturesComponent
  },
  {
    path:"quranrecitation",component:QuranRecitationComponent
  },
   {
    path:"question",component:QuestionComponent
  },
  {
    path:"nahjolbalagha",component:NahjolbalaghaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturesRoutingModule { }
