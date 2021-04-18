import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';

import { FormGroup } from '@angular/forms';
import { SortRequestTrainingSessions } from '../class/sort-request-training-sessions';
import { TokenStorageService } from '../auth/token-storage.service';

interface Info{
  token: string;
  username: string;
  authorities: string[];
}



@Component({
  selector: 'app-training-session-list',
  templateUrl: './training-session-list.component.html',
  styleUrls: ['./training-session-list.component.css']
})
export class TrainingSessionListComponent implements OnInit {

  info: Info;

  filterForm: FormGroup;
  startDate?: Date;
  deliveryMethod?: String;
  ifsVersion?: String;

  requestBody: SortRequestTrainingSessions;
  trainingSessions: any;
  sortedTrainingSessions: SortRequestTrainingSessions = new SortRequestTrainingSessions();

  authority :string;

  constructor(private trainingSessionService: TrainingSessionService, private router: Router, private token: TokenStorageService) { }

  ngOnInit(): void {
    const token = this.token.getToken();
    const username = this.token.getUsername();
    const authorities = this.token.getAuthorities();
    this.info = {
      token: token,
      username: username,
      authorities: authorities
    };

    this.getTrainingSessions();
  }

  private getTrainingSessions(){

    let flag:boolean = this.info.authorities.every(role => {
      if (role['authority'] === 'ROLE_MANAGER') {
        this.authority ='manager' ;
        return true ;
      }
        return false;


    });

    if(flag){
      this.trainingSessionService.getTrainingSessionList().subscribe(data=>{
        this.trainingSessions = data;
      });

    }else{
      this.trainingSessionService.getTrainingSessionListByTrainer(this.info.username).subscribe(data=>{
        this.trainingSessions = data;
      });

    }







  }

  trainingSessionDetails(id: number) {
    this.router.navigate(['training-session-details', id]);
  }

  updateTrainingSession(id: number) {
    this.router.navigate(['update-training-session', id]);
  }

  deleteTrainingSession(id: number) {
    this.trainingSessionService.deleteTrainingSession(id).subscribe(data => {
      console.log(data);
      this.getTrainingSessions();
    })
  }

  onSubmit() {
    this.requestBody= {
      startDate:this.startDate,
      deliveryMethod:this.deliveryMethod,
      ifsVersion:this.ifsVersion
    };

    console.log(this.requestBody);
    this.trainingSessionService.getSortedTrainingSessions(this.requestBody).subscribe(data => {
      this.trainingSessions = [];
      this.trainingSessions = data;
    })

  }

}
