import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';

@Component({
  selector: 'app-training-session-details',
  templateUrl: './training-session-details.component.html',
  styleUrls: ['./training-session-details.component.css']
})
export class TrainingSessionDetailsComponent implements OnInit {

  id:number;
  trainingSession: TrainingSession;
  constructor(private route:ActivatedRoute, private trainingSessionService: TrainingSessionService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.trainingSession= new TrainingSession();
    this.trainingSessionService.getTrainingSessionById(this.id).subscribe( data=>{
      this.trainingSession= data;
    });
  }

}
