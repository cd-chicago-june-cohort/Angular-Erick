import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  position = ['OFF', 'OFF', 'OFF', 'OFF', 'OFF', 'OFF', 'OFF', 'OFF', 'OFF', 'OFF', ]
  bool = [false, false, false, false, false, false, false, false, false, false, ]

  logSwitch(index){
    if(this.position[index] == "OFF"){
      this.bool[index] = true
      this.position[index] = 'ON'
    }
    else{
      this.position[index] = 'OFF'
      this.bool[index] = false
    }
  }
}
