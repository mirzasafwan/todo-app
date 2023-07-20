import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskObj: Task = new Task(); //Instance of Class
  taskArr: Task[] = [] //Array to store the value
  addTaskVal: string = '' //Empty String
  editTaskVal: string = ''//Empty String
  constructor(private crud: CrudService) { }

  ngOnInit() {
    this.getAllTask() // All Array Item to display on the screen
  }
  getAllTask() {
    this.crud.getTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }


  addTask() {
    this.taskObj.name = this.addTaskVal;
    this.crud.add(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskVal = ''
    }, err => {
      alert(err);
    })
  }




  editTask() {
    this.taskObj.name = this.editTaskVal;

    this.crud.edit(this.taskObj).subscribe(res => {
      this.ngOnInit();

    }, err => {
      alert("Failed to update task");
    })
  }
  call(etask: Task) {
    this.taskObj = etask
    // console.log(this.taskObj)
    this.editTaskVal = etask.name;

  }

  deleteTask(etask: Task) {
    this.taskObj.name = this.editTaskVal;
    this.crud.delete(etask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task");
    });
  }

}


