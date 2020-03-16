import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

//import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


const firebaseConfig = {
  apiKey: "AIzaSyBaQa4_CVBDxDYvTqXCQuW2SCOybPvNQzg",
  authDomain: "leafanima-260617.firebaseapp.com",
  databaseURL: "https://leafanima-260617.firebaseio.com",
  projectId: "leafanima-260617",
  storageBucket: "leafanima-260617.appspot.com",
  messagingSenderId: "210201601009",
  appId: "1:210201601009:web:2f8ef4ee1713e883389a50",
  measurementId: "G-3JMY2R0FNP"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    FormsModule
  ],
  providers: [
    Firebase,
    StatusBar,
    SplashScreen,
    GooglePlus,
BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
