import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = ''
  tasks = []
  
  constructor(private _taskService: TaskService) {}

  onSubmit(){
    this._taskService.retrieveTasks(this.username).then( tasks => {this.tasks = tasks}).catch(err => {console.log(err)})
  }
}
