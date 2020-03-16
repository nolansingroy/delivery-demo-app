import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
//import { DeviceComponent } from './device/device.component';



@NgModule({
  exports: [ ProfileComponent, LoginComponent],
  declarations: [ProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class SharedModule { }
