import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupInfo } from 'src/app/auth/signup-info';
import { TrainingSession } from 'src/app/class/training-session';
import { TrainerService } from 'src/app/services/trainer.service';
import { TrainingSessionService } from 'src/app/services/training-session.service';





@Component({
  selector: 'app-subordinatesdetails',
  templateUrl: './subordinatesdetails.component.html',
  styleUrls: ['./subordinatesdetails.component.css']
})
export class SubordinatesdetailsComponent implements OnInit {
  trainingSessions: TrainingSession[];
  trainers: SignupInfo[];
  constructor(private trainingSessionService: TrainingSessionService, private router: Router, private trainerService: TrainerService,) { }

  ngOnInit(): void {
    this.getTrainingSessions();
    this.getTrainers();
  }
  private getTrainers() {
    this.trainerService.getUserList().subscribe(data => {
      this.trainers = data;
      console.log(data);
    });
  }

  trainerDetails(id: number) {
    this.router.navigate(['trainer-details', id]);
  }

  private getTrainingSessions() {
    this.trainingSessionService.getTrainingSessionList().subscribe(data => {
      this.trainingSessions = data;
      console.log(data);
    });
  }

  trainingSessionDetails(id: number) {
    this.router.navigate(['training-session-details', id]);
  }

  // updateTrainingSession(id: number) {
  //   this.router.navigate(['update-training-session', id]);
  // }

  // deleteTrainingSession(id: number) {
  //   this.trainingSessionService.deleteTrainingSession(id).subscribe(data => {
  //     console.log(data);
  //     this.getTrainingSessions();
  //   })
  // }

}
