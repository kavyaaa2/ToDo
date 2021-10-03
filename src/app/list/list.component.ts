import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }
  @Input() myTasks:Array<Task> =[];
  ngOnInit(): void {
  }
  crossText(index:number){
    let x= (<HTMLInputElement>document.getElementById("check"+index));
    if(x?.checked==true)
      this.myTasks[index].checked=true;
    else
      this.myTasks[index].checked=false;
  }
  removeCompletedTasks(){
    for (let index = this.myTasks.length-1; index >=0; index--) {
      if(this.myTasks[index].checked==true){
        this.myTasks.splice(index, 1);
        console.log(index)
      }
    }
  }
}
