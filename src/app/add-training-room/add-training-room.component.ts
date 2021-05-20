import { Router } from '@angular/router';
import { TrainingRoom } from '../class/training-room';
import { GeneralService } from '../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-training-room',
  templateUrl: './add-training-room.component.html',
  styleUrls: ['./add-training-room.component.css']
})
export class AddTrainingRoomComponent implements OnInit {

  trainingRoom : TrainingRoom = new TrainingRoom();

  constructor(private generalService:GeneralService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.generalService.addTrainingRoom(this.trainingRoom).subscribe(data=>{
      alert("Training Room Saved");
    })
  }

}
