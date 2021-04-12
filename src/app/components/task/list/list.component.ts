import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';
import { ShowComponent } from '../show/show.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks: Observable<Array<ITask>>;
  //tasks = [{ title: 'test' }];

  constructor(private leaveService: TaskService, public dialog: MatDialog) { }
  //private leaveService: TaskService
  ngOnInit(): void {
    this.getTasks();
  }
  //done
  getTasks() {
    this.tasks = this.leaveService.getTaskList();

    //just for check
    this.leaveService.getTaskList().subscribe((d) => {
      console.log(d);
    })
  }

  onOpenDialog(task: ITask) {
    //console.log(task);

    const dialogRef = this.dialog.open(ShowComponent, {
      //width: '250px',
      data: task,
    });

    //to refresh
    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
    });
  }
}