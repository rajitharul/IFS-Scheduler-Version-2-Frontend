import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITaskTypeOption } from 'src/app/interface/task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  taskForm: FormGroup;
  typeOption: Array<ITaskTypeOption> = [];
  constructor(private fb: FormBuilder, private leaveService: TaskService) { }
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOption = this.leaveService.getTypeOptions();
  }
  addTask() {
    //just to check
    console.log(this.taskForm.value);

    this.leaveService.postTaskList(this.taskForm.value).subscribe((d) => {
      console.log(d);
      //after submit it - need to go to home page - private router: Router
      //this.router.navigateByUrl('/leavemanagement/home');
    },
      (error) => {
        console.error(error);
      }

    );
  }

}
