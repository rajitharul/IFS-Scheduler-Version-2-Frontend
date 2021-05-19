import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ITask } from '../interface/task.interface';
import { LeaveMService } from '../services/leave.service';
import { LeaveInfo } from '../auth/Manage-leaveInfo';

@Component({
  selector: 'app-leavemanage',
  templateUrl: './leavemanage.component.html',
  styleUrls: ['./leavemanage.component.css']
})
export class LeavemanageComponent implements OnInit {
  leaves: LeaveInfo[];
  searchValue: string;

  //tasks: Observable<Array<ITask>>;
  //tasks = [{ title: 'test' }];

  constructor(private leaveService: LeaveMService) { }

  //private leaveService: TaskService
  ngOnInit(): void {
    this.getTasks();
  }
  //working
  // getTasks() {
  //   this.tasks = this.leaveService.getLeaves();
  //   this.leaveService.getLeaves().subscribe((d) => {
  //     console.log(d);

  //   })
  // }

  getTasks() {
    this.leaveService.getLeaves().subscribe(data => {
      console.log(data);
      this.leaves = data;
    });
  }
  // private getTrainers(){
  //   this.trainerService.getTrainerList().subscribe(data=>{
  //     this.trainers = data;
  //   });
  // }

  // onOpenDialog(task: ITask) {
  //   //console.log(task);

  //   const dialogRef = this.dialog.open(ShowComponent, {
  //     //width: '250px',
  //     data: task,
  //   });
  //}

}