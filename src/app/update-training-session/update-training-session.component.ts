import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';

@Component({
  selector: 'app-update-training-session',
  templateUrl: './update-training-session.component.html',
  styleUrls: ['./update-training-session.component.css']
})
export class UpdateTrainingSessionComponent implements OnInit {

  id:number;
  trainingSession: TrainingSession = new TrainingSession();

  constructor(private trainingSessionService:TrainingSessionService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.trainingSessionService.getTrainingSessionById(this.id).subscribe(data=>{
      this.trainingSession = data;
    },error=>console.log(error));
  }

  onSubmit(){
    this.trainingSessionService.updateTrainingSession(this.id,this.trainingSession).subscribe(data=>{
      this.goToTrainingSessionList();
    },error =>console.log(error));
  }

  goToTrainingSessionList(){
    this.router.navigate(['/trainingSessions']);
  }

}
