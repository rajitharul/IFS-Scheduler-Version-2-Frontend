import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingCordinator } from '../class/training-cordinator';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-add-training-cordinator',
  templateUrl: './add-training-cordinator.component.html',
  styleUrls: ['./add-training-cordinator.component.css']
})
export class AddTrainingCordinatorComponent implements OnInit {

  trainingCoordinator : TrainingCordinator = new TrainingCordinator();

  constructor(private generalService:GeneralService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.generalService.addtrainerCordinators(this.trainingCoordinator).subscribe(data=>{
      alert("Coordinator Saved");
      
    });
  }

}
