import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  boolPST = false;
  boolMST = false;
  boolCST = false;
  boolEST = false;
  hide = true;
  time = new Date();

  setZone(zone) {
    this.boolPST = false;
    this.boolMST = false;
    this.boolCST = false;
    this.boolEST = false;
    this.hide = false
    this.time = new Date();

    if(zone == 'PST'){
      this.time.setHours(this.time.getHours()-2)      
      this.boolPST = true;
    }
    else if(zone == 'MST'){
      this.time.setHours(this.time.getHours()-1)
      this.boolMST = true;
    }
    else if(zone == 'CST'){
      this.time.setHours(this.time.getHours())
      this.boolCST = true;
    }
    else if(zone == 'EST'){
      this.time.setHours(this.time.getHours()+1)
      this.boolEST = true;
    }
    else{
      this.time = new Date();
    }
  }

  clear(){
    this.hide = true;
    this.boolPST = false;
    this.boolMST = false;
    this.boolCST = false;
    this.boolEST = false;
  }

}
