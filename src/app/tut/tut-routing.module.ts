import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutPage } from './tut.page';

const routes: Routes = [
  {
    path: '',
    component: TutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutPageRoutingModule {}
