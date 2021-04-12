import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';


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
  trainingSessions: TrainingSession[];

  constructor(private trainingSessionService:TrainingSessionService,private router:Router , private token: TokenStorageService) { }

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
    
    if(this.info.username == 'rajith'){
      this.trainingSessionService.getTrainingSessionList().subscribe(data=>{
        this.trainingSessions = data;
      });

    }else{
      this.trainingSessionService.getTrainingSessionListByTrainer(this.info.username).subscribe(data=>{
        this.trainingSessions = data;
      });

    }
    
 





  }

  trainingSessionDetails(id:number){
    this.router.navigate(['training-session-details', id]);
  }

  updateTrainingSession(id:number){
    this.router.navigate(['update-training-session', id]);
  }

  deleteTrainingSession(id:number){
    this.trainingSessionService.deleteTrainingSession(id).subscribe(data=>{
      console.log(data);
      this.getTrainingSessions();
    })
  }

}
