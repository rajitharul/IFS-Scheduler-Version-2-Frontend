import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainingSession } from '../class/training-session';
import { TrainingSessionService } from '../services/training-session.service';
import {VirtualMachineService} from '../services/virtual-machine.service';

import {TrainerService} from '../services/trainer.service';
import { Trainer } from '../class/trainer';
import { VirtualMachine } from '../class/virtual-machine';



@Component({
  selector: 'app-create-training-session',
  templateUrl: './create-training-session.component.html',
  styleUrls: ['./create-training-session.component.css']
})
export class CreateTrainingSessionComponent implements OnInit {

  trainingSession: TrainingSession=new TrainingSession();
  virtualMachineIds :number[] = [];
 // virtualMachineNames :string[] = [];
  trainerIds :number[] = [];
  trainerId :number = 0;
  trainers : Trainer[];
  virtualMachines : VirtualMachine[];

  tempProduct: string;






  virtualMachineId :number = 0;
 // virtualMachineName :string;

  constructor(private trainingSessionService:TrainingSessionService, private router:Router ,  private virtualMachineService:VirtualMachineService , private trainerService:TrainerService) { }

  ngOnInit(): void {

  }

  saveTrainingSession(){
    this.trainingSessionService.createTrainingSession(this.trainingSession).subscribe(data=>{
      console.log(data);
      this.goToTrainingSessionList();
    },
    error => console.error(error));
  }

  goToTrainingSessionList(){
    this.router.navigate(['/trainingSessions']);
  }

  addVm(){

    if(this.trainingSession.ifsApplicationVersion !=null){      console.log("IFS Version is ......" + this.trainingSession.ifsApplicationVersion)
  }else{
    alert("Please enter the ifsApplicationVersion before checking for the VMs");
  }


    this.virtualMachineService.getVirtualMachinebyId(this.virtualMachineId).subscribe(data=>{
      this.virtualMachineIds.push(this.virtualMachineId);
      console.log(data);
      console.log("virtual machines Ids"  + this.virtualMachineIds);
    },
    error => console.error(error));

  }

  getAvailableVM(){

    this.tempProduct = this.trainingSession.ifsApplicationVersion;

    for (var i = 0; i < this.tempProduct.length; i++) {
      //this.trainingSession.ifsApplicationVersion.charAt(i))
      if(this.tempProduct.charAt(i)===" "){
        this.tempProduct= this.tempProduct.replace(this.tempProduct.charAt(i), "-");
      }

    }
    console.log(this.tempProduct);

console.log( this.trainingSession.startDate)

     this.virtualMachineService.getAvailableVirtualMachineList(this.trainingSession.startDate,this.tempProduct).subscribe(data=>{
      console.log(data);
    },
    error => console.error(error));

  }


  getAvailableTrainers(){

    console.log('getting available Trainers')

          let type  = this.trainingSession.type;

          this.trainerService.getAvailableTrainerList(type ,this.trainingSession.startDate ).subscribe(data=>{
            this.trainers = data;

            console.log( this.trainers);
          },
          error => console.error(error));

      }





  addTrainer(){

    this.trainerIds.push(this.trainerId);
      console.log("Trainer Id pushed" + this.trainerId);
      console.log("Trainer Ids"  + this.trainerIds);


  }





  onSubmit(){

    this.trainingSession.ifsApplicationVersion=this.tempProduct;

    this.trainingSession.vmIds = this.virtualMachineIds;
    this.trainingSession.trainerids = this.trainerIds;
    console.log(this.trainingSession);
    this.saveTrainingSession();
  }
}
