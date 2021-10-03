import { Component } from '@angular/core';
import { Task } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  inputText="";
  tasks:Array<Task> =[];
  addTask() {
    if(this.inputText.length!=0)
      this.tasks.push({
        name:this.inputText,
        checked:false
      })
      let x= (<HTMLInputElement>document.getElementById("in"));
      x.value=""
      this.inputText=""
    console.log(this.tasks)
  }
}
