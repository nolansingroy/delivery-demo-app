import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutPageRoutingModule } from './tut-routing.module';

import { TutPage } from './tut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutPageRoutingModule
  ],
  declarations: [TutPage]
})
export class TutPageModule {}
