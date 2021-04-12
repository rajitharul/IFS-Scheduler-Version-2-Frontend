import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask, ITaskTypeOption } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  taskForm: FormGroup;
  typeOption: Array<ITaskTypeOption> = [];
  constructor(
    public dialogRef: MatDialogRef<ShowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask,
    private fb: FormBuilder,
    private leaveService: TaskService,
  ) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOption = this.leaveService.getTypeOptions();
    //console.log(this.data);
    this.showTask();
  }

  showTask() {
    this.leaveService.getLeaveById(this.data.id).subscribe(
      (d: ITask) => {
        //console.log(d);
        this.taskForm.controls['title'].setValue(d.title);
        this.taskForm.controls['type'].setValue(d.type);
        this.taskForm.controls['date'].setValue(
          new Date(d.date).toISOString()
        );
        this.taskForm.controls['description'].setValue(d.description);
      }, (error) => console.error(error)
    );
  }

  updateTask() {

    this.taskForm.value;
    this.leaveService
      .updateTask(this.taskForm.value, this.data.id)
      .subscribe((d) => {
        //console.log(d);
        this.dialogRef.close();
      }, error => console.error(error)
      );
  }
  onDeleteTask() {
    this.leaveService
      .deleteTask(this.data.id)
      .subscribe((d) => {
        //console.log(d);
        this.dialogRef.close();
      }, error => console.error(error)
      );
  }
}
