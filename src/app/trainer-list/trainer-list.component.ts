import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupInfo } from '../auth/signup-info';
import { TrainerService } from '../services/trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers:SignupInfo[];

  constructor(private trainerService:TrainerService, private router: Router) { }

  ngOnInit(): void {
    this.getTrainers();
  }
  private getTrainers(){
    this.trainerService.getAllTrainerList().subscribe(data=>{
      this.trainers = data;
    });
  }

  trainerDetails(id:number){
    this.router.navigate(['trainer-details', id]);
  }

}
