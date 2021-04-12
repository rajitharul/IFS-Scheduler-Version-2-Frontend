import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { ITask, ITaskTypeOption } from '../interface/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpclient: HttpClient) { }

  getTaskList(): Observable<Array<ITask>> {
    return this.httpclient
      .get('http://localhost:8080/api/v1/person')
      .pipe(map((d: Array<ITask>) => d));

  }


  postTaskList(task: ITask): Observable<ITask> {
    return this.httpclient
      .post("http://localhost:8080/api/v1/person", task)
      .pipe(map((d: ITask) => d));

  }

  updateTask(task: ITask, id: string): Observable<ITask> {
    return this.httpclient
      .put(`http://localhost:8080/api/v1/person/${id}`, task)
      .pipe(map((d: ITask) => d));

  }

  deleteTask(id: string) {
    // throw new Error('Method not implemented.');
    return this.httpclient
      .delete(`http://localhost:8080/api/v1/person/${id}`);

  }
  getLeaveById(id: string): Observable<ITask> {
    return this.httpclient
      .get(`http://localhost:8080/api/v1/person/${id}`)
      .pipe(map((d: ITask) => d));
  }

  // getLeaves() : Observable<LeaveInfo[]>{
  //   return this.httpclient
  //     .get('http://localhost:8080/api/v1/leave/all');
  //     // .pipe(map((d: Array<ITask>) => d));

  // }

  getTypeOptions(): Array<ITaskTypeOption> {
    return [{ type: 'Casual Leave' }, { type: 'Holidat Leave' }, { type: 'Maternity Leave' }, { type: 'Sick Leave' }];
  }
}
