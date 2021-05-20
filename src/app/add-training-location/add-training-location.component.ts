import { Router } from '@angular/router';
import { Location } from '../class/location';
import { GeneralService } from '../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-training-location',
  templateUrl: './add-training-location.component.html',
  styleUrls: ['./add-training-location.component.css']
})
export class AddTrainingLocationComponent implements OnInit {

  trainingLocation: Location= new Location(); 

  constructor(private generalService:GeneralService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.generalService.addLocation(this.trainingLocation).subscribe(data=>{
      alert("Location Saved");
      
    });
  }
}
