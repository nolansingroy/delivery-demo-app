import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
import { DbService } from '../services/db.service';
import { AuthService } from '../services/auth.service';
 
@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  todo;

 
 
  constructor(private barcodeScanner: BarcodeScanner,private db: DbService) {
    this.encodeData = "https://www.google.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }
 
 scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
       
       const data = {
        createdAt: Date.now(),
        ...this.scannedData,
              };
       const id = this.todo ? this.todo.id : '';

        //upload to firestore list
        this.db.updateAt(`scans/${id}`, data);//path, data
      })
      .catch(err => {
        console.log("Error", err);
      });
  }
 

encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
  ngOnInit() {
    const data = {
      content: '',
      status: 'pending',
      ...this.todo
    };
  }

}
